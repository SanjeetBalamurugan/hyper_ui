const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

function buildStyles() {
  return src('hyperui/**/*.scss')
    .pipe(sass({
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(csso())
    .pipe(rename('hui.css'))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['hyperui/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)