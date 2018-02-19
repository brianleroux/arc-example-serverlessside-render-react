How this works:

- src/views is a react app

`npm run build` 
1. compiles the react assets into clientside assets `.static` with Parcel
2. `.static` gets copied into `src/shared/views`
3. compiles the react assets into a Node module that exports a single function (in src/shared/views) that accepts an object `{path, state}` and returns an HTML string using Rollup

Routes use the Node module in src/shared/views (by requireing it with `require('@architect/shared/views')` to prerender the React code.

`npm run deploy` copies `.static` to s3 and deploys all the lambdas
