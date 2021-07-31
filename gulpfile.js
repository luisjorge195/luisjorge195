const {dest,src,watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(){
    return src('src/scss/app.scss')
    .pipe(sass())
    .pipe(dest('./build/app.css'))
}

function watcharchivos(){
    watch ('src/scss/**/*.scss',css);

}
exports.css=css;
exports.watcharchivos = watcharchivos;