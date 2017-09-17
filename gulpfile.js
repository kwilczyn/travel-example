var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function() {
	console.log("Horray - you created a Gulp task.");
});

gulp.task('html', function(){
	console.log("Imagine something useful being done to HTML here");
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	 .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	 .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});
});