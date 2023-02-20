import * as acorn from 'acorn';
import * as acornJsx from 'acorn-jsx';
import React from 'react'
import ReactDOM from 'react-dom'
import AllScope from './scope'

const JSXParser = acorn.Parser.extend(acornJsx());
const DEFAULT_SCOPE = {
  'react': React,
  React,
  ReactDOM
}

/**
 * 解析code
 * @param {string} code 
 * @returns 
 */
export default function codeParser(code) {
  if (!code) {
    return {}
  }

  const ast = JSXParser.parse(code, {
    ecmaVersion: 2020, 
    sourceType: 'module'
  });

  const scopeKeys = []

  ast.body.forEach(({ type, source }) => {
    if (type === 'ImportDeclaration') {
      /**
       * 分析依赖
       */
      const dependencyName = source.value
      dependencyName && scopeKeys.push(dependencyName)
    }
  })

  const selfScopes = scopeKeys.reduce((cur, next) => ({
    ...cur,
    [next]: AllScope[next]
  }), {})

  return {
    ...DEFAULT_SCOPE,
    ...selfScopes
  }
}