var gulp = require('gulp');
var header = require('gulp-header');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('header', function () {
    return gulp.src('./src/dom.js')
        .pipe(header('/*! dom.js | Copyright <%= year %> Jonathan Wilsson. */\n', {
            year: new Date().getFullYear()
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('jshint', function () {
    return gulp.src('.src/dom.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('uglify', ['header'], function () {
    return gulp.src('./dist/dom.js')
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['jshint', 'uglify']);
