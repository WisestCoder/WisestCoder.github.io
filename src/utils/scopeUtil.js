const fs = require('fs')
const glob = require('glob')
const acorn = require('acorn')
const acornJsx = require('acorn-jsx')
const { join } = require('path')

const JSXParser = acorn.Parser.extend(acornJsx());
const cwd = process.cwd()
const JSX_REG = /(```)(?:jsx.*live.*)([^\1]*?)(\1)/g;
const TSX_REG = /(```)(?:tsx.*live.*)([^\1]*?)(\1)/g;

function matchCodes(code) {
  let codes = []
  const jsxMatched = code.matchAll(JSX_REG);
  const tsxMatched = code.matchAll(TSX_REG);

  // 匹配jsx
  if (jsxMatched) {
    const newCodes = Array.from(jsxMatched).map(item => item[2]);
    codes = codes.concat(newCodes)
  }

  // 匹配tsx
  if (tsxMatched) {
    const newCodes = Array.from(tsxMatched).map(item => item[2]);
    codes = codes.concat(newCodes)
  }

  return codes
}

function astImportParser(code) {
  const ast = JSXParser.parse(code, {
    ecmaVersion: 2020, 
    sourceType: 'module'
  });

  const scopes = []

  ast.body.forEach(({ type, source }) => {
    if (type === 'ImportDeclaration') {
      const dependencyName = source.value

      dependencyName && scopes.push(dependencyName)
    }
  })

  return scopes
}

function getDocPaths() {
  const files = glob.sync('**/*.md?(x)', {
    cwd: join(cwd, 'docs'),
    nodir: true,
    dot: true
  })
  return files.map((fileName) => {
    return join(cwd, 'docs', fileName)
  })
}

function readFilesScope(files) {
  let allScopes = []

  files.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
    const codes = matchCodes(fileContent)
    const fileScope = codes.reduce((cur, next) => [
      ...cur,
      ...(astImportParser(next))
    ], [])
    
    allScopes = allScopes.concat(fileScope)
  })

  return allScopes
}

function readScope() {
  const files = getDocPaths()
  return readFilesScope(files)
}


module.exports = {
  readScope,
  readFilesScope,
}