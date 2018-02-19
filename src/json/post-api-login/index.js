var arc = require('@architect/functions')

function route(req, res) {
  var loggedIn = req.body.username=== 'admin' && 
                 req.body.password === 'admin'
  res({
    session: {
      account: loggedIn,
    }, 
    json: {ok: loggedIn}
  })
}

exports.handler = arc.json.post(route)
