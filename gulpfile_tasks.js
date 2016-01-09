"use strict";

const
	gulp = require("gulp"),
	jshint = require("gulp-jshint");

gulp.task("task1", function(done) {

	setTimeout(function() {
		console.log("Task 1!");
		done();
	}, 2000);

});

gulp.task("task2", function() {

	return new Promise(function(resolve) {

		setTimeout(function() {
			console.log("Task 2!");
			resolve();
		}, 3000);
	});



});

gulp.task("task3", function(done) {

	setTimeout(function() {
		console.log("Task 3!");
		done();
	}, 1000);

});

gulp.task("default", ["task1","task2","task3"], function() {

	console.log("I love to drink Super Big Gulps!");

});
