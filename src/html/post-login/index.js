var arc = require('@architect/functions')

function route(req, res) {

  var loggedIn = req.body.username === 'admin' && 
                 req.body.password === 'admin'
  res({
    session: {
      account: loggedIn,
    }, 
    location: req._url('/'),
  })
}

exports.handler = arc.html.post(route)
