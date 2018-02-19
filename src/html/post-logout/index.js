var arc = require('@architect/functions')

function route(req, res) {
  res({
    session: {},
    location: req._url('/')
  })
}

exports.handler = arc.html.post(route)
