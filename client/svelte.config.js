import preprocess from 'svelte-preprocess';
import svelteKitNodeAdapter from '@sveltejs/adapter-node';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssCustomMedia from 'postcss-custom-media';
import postcssCustomProperties from 'postcss-custom-properties';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import postcssGlobalNested from 'postcss-global-nested';
import cssnano from 'cssnano';
import dotenv from 'dotenv'; 

import { resolve } from 'path';

dotenv.config();

const shouldProxy = process.env.NODE_ENV === 'development' && process.env.VITE_DISABLE_DOCKER === 'true' && Boolean(process.env.VITE_NO_DOCKER_API_PORT);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [
        postcssImport(),
        postcssMixins,
        autoprefixer,
        postcssCustomMedia({
          importFrom: [
            './src/assets/styles/__customMedia.css',
          ]
        }),
        postcssCustomProperties(),
        postcssPresetEnv({
          stage: 3,
          features: {
            'nesting-rules': true,
          },
        }),
        postcssNested(),
        postcssGlobalNested(),
        cssnano({
          preset: 'default',
        }),
      ],
    },
    preserve: ['ld+json'],
  }),
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: svelteKitNodeAdapter(),
    vite: {
      ...(
        shouldProxy ? {
          server: {
            proxy: {
              '/api': `http://localhost:${process.env.VITE_NO_DOCKER_API_PORT}`,
            }
          }
        } : {}),
      resolve: {
        alias: {
          assets: resolve('./src/assets'),
          components: resolve('./src/components'),
          helpers: resolve('./src/helpers'),
          lib: resolve('./src/lib'),
          auth: resolve('./src/auth'),
          pages: resolve('./src/pages'),
          providers: resolve('./src/providers'),
          repositories: resolve('./src/repositories'),
          services: resolve('./src/services'),
          src: resolve('./src'),
          stores: resolve('./src/stores'),
        }
      }
    }
  },
};

export default config;
