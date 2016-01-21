var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var vinylStream =  require("vinyl-source-stream");

gulp.task("default",function(){
	return browserify("./source/app.js")
	.transform(babelify)
	.bundle()
	.pipe(vinylStream("snapterest.js"))
	.pipe(gulp.dest("./build/"));
});