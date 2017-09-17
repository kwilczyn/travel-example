var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
	console.log("Horray - you created a Gulp task.");
});

gulp.task('html', function(){
	console.log("Imagine something useful being done to HTML here");
});

gulp.task('styles', function(){
	console.log("Imagine something useful being done to css here");
});

gulp.task('watch',function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});
});