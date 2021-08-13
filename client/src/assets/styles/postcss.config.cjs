const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('postcss-custom-media')({
      exportTo: [
        './src/assets/styles/customMedia.json',
      ],
      importFrom: [
        './src/assets/styles/__customMedia.css',
      ],
    }),
    require('postcss-custom-properties')({
      exportTo: [
        './src/assets/styles/customProperties.json',
      ],
      importFrom: [
        './src/assets/styles/__vars.css',
      ],
    }),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    require('postcss-nested')(),
    require('postcss-global-nested')(),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
