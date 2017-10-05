var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require('browser-sync').create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");

// Для спрайта з svg
/*
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");

gulp.task("symbols", function () {
    return gulp.src("img/icons/*.svg")
        .pipe(svgmin())
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("symbols.svg"))
        .pipe(gulp.dest("img"));
});
*/
gulp.task("sass", function () {
  gulp.src("sass/style.scss")      //звідки ми все починаємо
    .pipe(sass())
    .pipe(gulp.dest("css"))     // в яку папку зберегти результат
    // .pipe(minify())
    // .pipe(rename("style.min.css"))
    // .pipe(gulp.dest("build/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch("*.html").on("change", browserSync.reload);
  // Other watchers
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: ''
    }
  })
});

