const { mix } = require('laravel-mix');

mix
.js('src/js/main.js', 'js')
.sass('src/scss/app.scss', 'css', {
  postCss: [
    require('postcss-css-variables')()
  ]
})
