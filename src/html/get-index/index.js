var arc = require('@architect/functions')
var render = require('@architect/shared/views')

function route(req, res) {
  var path = req._url('/')
  var state = {
    loggedIn: req.session.account, 
    urls: {
      home: req._url('/'), 
      login: req._url('/login'), 
      logout: req._url('/logout'),
    }, 
    api:{
      home: req._url('/api'), 
      login: req._url('/api/login'), 
      logout: req._url('/api/logout'),
    }
  }
  var html = render({path, state})
  res({html})
}

exports.handler = arc.html.get(route)
