"use strict";

var gulp = require("gulp");//сам gulp
var less = require("gulp-less");//библиотека less
var plumber = require("gulp-plumber");//обеспечивает беспрерывную работу сервера в случае ошибки
var postcss = require("gulp-postcss");//постпроцессор
var autoprefixer = require("autoprefixer");//автопрефиксер
var del = require("del");//будет удалять файлы из build, которых больше нет в source
var copy = require("gulp-copy");//будет копировать файлы из source в build
var server = require("browser-sync").create();//авто загрузка изменений в сервер
var run = require("run-sequence"); //будет запускать задания по порядку
var minify = require("gulp-csso");//минификация css
var rename = require("gulp-rename");//переименовывает файлы
var imagemin = require("gulp-imagemin");//минификация изображений
var webp = require("gulp-webp");//создает webp-изображения
var svgstore = require("gulp-svgstore");//создает svg-спрайт
var posthtml = require("gulp-posthtml");//может добавлять код в *.html, необходимы плагины
var include = require("posthtml-include");//плагин для posthtml. Вместо тэга include вставляет файл
var run = require("run-sequence");//позволяет запускать задачи последовательно

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());//подменяет только css файл без перезагрузки страницы
});

gulp.task("serve", function () {
  server.init({ //стартует сервер
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", ["style"]); //следит за изменениями и перегружает страницу
  gulp.watch("source/*.html", ["html"]).on("change", server.reload);
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationlevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function() {
  return gulp.src("source/img**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function () {
  return gulp.src("sorce/img/sprite-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "style",
    "serve",
    "images",
    "webp",
    "sprite",
    "html"
    done
  );
});
