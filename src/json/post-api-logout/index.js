var arc = require('@architect/functions')

function route(req, res) {
  res({
    session: {},
    json: {ok:true}
  })
}

exports.handler = arc.json.post(route)
