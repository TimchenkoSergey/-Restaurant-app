"use strict";

const gulp       = require("gulp"),
	  minify     = require("gulp-minify-css"),
	  prefix     = require("gulp-autoprefixer"),
	  sass       = require("gulp-sass"),
	  rename     = require("gulp-rename"),
	  concat     = require('gulp-concat'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify     = require('gulp-uglify'),
      ngAnnotate = require('gulp-ng-annotate'),
      babel      = require('gulp-babel'),
	  gulpDocs   = require('gulp-ngdocs');

gulp.task("css", function() {
	gulp.src([
		"libs/animate/*.css",
		"scss/main.scss"
		])
		.pipe(sass())
		.pipe(concat("main.min.css"))
		.pipe(prefix("last 5 versions","> 1%","ie 9"))
		.pipe(minify())
		.pipe(rename("main.min.css"))
		.pipe(gulp.dest("app/css/"));
});

gulp.task("js", function () {
	gulp.src([
			"js/MealsModule/main.js",
			"js/MealsModule/config.js",
			"js/MealsModule/services/*.js",
			"js/MealsModule/components/**/*.js",
			"!js/MealsModule/**/*.spec.js"
		])
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat("app.js"))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("js/"));
});

gulp.task("concat", function () {
	gulp.src([
			"libs/angular/angular.min.js",
			"libs/angular/angular-ui-router.min.js",
			"js/app.js"
		])
		.pipe(concat("app.min.js"))
		.pipe(gulp.dest("app/js/"));
});

gulp.task("templates", function () {
	gulp.src("js/MealsModule/components/**/*.html")
		.pipe(gulp.dest("app/component-templates/"));
});

gulp.task("ngdocs", [], function () {
	gulp.src("js/MealsModule/**/*.js")
		.pipe(gulpDocs.process()) 
		.pipe(gulp.dest("./docs"));
});

gulp.task("watch", function() {
	gulp.watch("scss/*.scss", ["css"]);
});

gulp.task("default", ["js", "css", "concat", "templates", "ngdocs", ]);