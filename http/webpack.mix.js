const mix = require('laravel-mix');



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
   resolve:{
      alias:{
         '@sass':path.resolve(__dirname,'/resources/sass'),
         '@js':path.resolve(__dirname,'/resources/js'),
      }
   }
})

mix.js('resources/js/app.js', 'public/js')
   .ts('resources/js/main.ts', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');