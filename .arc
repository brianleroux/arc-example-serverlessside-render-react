@app
parcel-arc

# @static notes
# - staging defines a staging bucket
# - production defines a production bucket
# - `npm run create` provisions two s3 buckets
# - `npm run deploy` contents of .static are sync'd to staging bucket
# - `ARC_DEPLOY=production npm run deploy` contents of .static are sync'd to production bucket
@static
staging parcel-test-staging
production parcel-test-production

# defines some basic "server" routes
@html
get /
get /login
post /logout
post /login

@json
post /api/login
post /api/logout
