var arc = require('@architect/functions')
var render = require('@architect/shared/views')

function route(req, res) {
  if (req.session.account) {
    var location = req._url('/')
    res({location})
  }
  else {
    var path = req._url('/login')
    var state = {
      loggedIn:false, 
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
}

exports.handler = arc.html.get(route)
