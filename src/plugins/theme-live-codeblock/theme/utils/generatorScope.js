const fs = require('fs')
const {  resolve } = require('path')
const ejs = require('ejs')
const {readScope} = require('../../../../utils/scopeUtil')


const scopeEjs = `
export default {
<% scopes.forEach(function(item){%>  '<%=item %>': require('<%=item %>'),
<% }) %>}`

module.exports = function generatorScope() {
  const scopes = readScope()

  fs.writeFileSync(resolve(__dirname, 'scope.js'), ejs.render(scopeEjs, {
    scopes
  }));
}
