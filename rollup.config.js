import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
 
export default {
  input: 'src/views/index.js',
  output: {
    file: 'src/shared/views/index.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': ['Component']
      }
    }),
  ],
  external: ['fs', 'path', 'stream'] 
}
