// use this plugin because we can't use vite plugin in jest
const buildPlugin = require('babel-plugin-precompile-intl');

module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        }],
        '@babel/preset-typescript'
      ],
      plugins: [ "@babel/transform-runtime", 'babel-plugin-transform-vite-meta-env']
    }
  },
  ...( process.env.NODE_ENV ==='test' ?  {
    overrides: [
      {
        test: /locale/,
        plugins: [ buildPlugin('svelte-intl-precompile') ],
      }
    ]}: {}
  )
}
