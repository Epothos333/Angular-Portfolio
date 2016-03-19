var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var watch = require('gulp-watch')

gulp.task('stylus', function() {
	return gulp.src('style.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./'));
});

gulp.task('concat', function() {
	return gulp.src('./javascript/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./*.styl', ['stylus']);
    gulp.watch('./javascript/*.js', ['concat']);  
});

  gulp.task('default', ['concat', 'stylus', 'watch']);


