import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './app'

// cached tmpl
var read = filename=> fs.readFileSync(path.join(__dirname, filename)).toString()
var raw = read('index.html')

// renders params
// - path: req.path
// - state: {}
module.exports = function render(params) {
  var body = ReactDOMServer.renderToString(<App path={params.path} state={params.state} />)   
  var initialState = `
<div id="root">${body}</div>
<script>window.initialState=${JSON.stringify(params.state)}</script>`
  var html = raw.replace('<div id="root"></div>', initialState)
  return html
}
