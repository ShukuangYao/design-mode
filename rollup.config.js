// Rollup plugins
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve' //解析node_modules中的模块
import commonjs from 'rollup-plugin-commonjs'//转换COMMONJS(通过module.export暴露模块接口，通过require引入模块，特点是同步执行)到ES6 Module（export/import）
import serve from "rollup-plugin-serve"//提供静态服务器能力
import replace from 'rollup-plugin-replace'//可在源码中通过process.env.NODE_ENV用于构建区分Development与Production环境
import uglify from 'rollup-plugin-uglify'//压缩bundle文件
import postcss from 'rollup-plugin-postcss'
// PostCSS plugins
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'
import rollupTypescript from 'rollup-plugin-typescript2'

export default {
  entry: 'src/main.ts',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({
          warnForDuplicates: false,
        }),
        cssnano(),
      ],
      extensions: ['.css','.scss'],
    }),
    rollupTypescript(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
    serve({
      // Launch in browser (default: false)
      open: true,

      // Show server address in console (default: true)
      verbose: false,

      // Folder to serve files from
      contentBase: '',

      // Multiple folders to serve from
      contentBase: ['build'],

      // Set to true to return index.html instead of 404
      historyApiFallback: true,

      // Options used in setting up server
      host: 'localhost',
      port: 10001
    })
  ],
}
