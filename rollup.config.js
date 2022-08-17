import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import commonjs from '@rollup/plugin-commonjs'

const config = {
  inlineDynamicImports: true,

  external: ['vue'],

  input: 'src/index.js',

  output: [
    {
      format: 'cjs',
      file: 'dist/bundle.js',
    }
  ],

  plugins: [
    commonjs(),
    vue(),
    scss()
  ]
}

export default config
