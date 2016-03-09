var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('default', function() {
	return gulp.src('style.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./'));
});

gulp.task('concat',['default'], function() {
	return gulp.src('./javascript/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./'));
})
