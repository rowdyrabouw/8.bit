const gulp = require("gulp");
const { watch } = require("gulp");
const terser = require("gulp-terser");

const jsmin = () => {
  return gulp
    .src("./src/_js/*.js")
    .pipe(terser())
    .pipe(gulp.dest("./src/assets/js"));
};

exports.jsmin = jsmin;

exports.default = function () {
  watch("./src/_js/*.js", jsmin);
};
