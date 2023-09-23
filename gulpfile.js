const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function sStyling() {
    return src('style.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchStyle() {
    watch(['style.scss'], sStyling)
}

exports.default = series(sStyling, watchStyle)
