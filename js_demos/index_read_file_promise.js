"use strict";

const fs = require("fs");

var p = new Promise(function(resolve, reject) {

	fs.readFile("../demo.js", "utf-8", function(err, data) {
		if (err) {
			reject(err);
			return;
		}
		resolve(data);
	});
});

p.then(function(result) {

	return new Promise(function(resolve, reject) {

		fs.readFile("../demo2.js", "utf-8", function(err, data) {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	})

}).then(function(result) {
	console.log(result);
}).then(function(result) {
	console.log(result);
}).then(function(result) {
	console.log(result);
}).catch(function(result) {
	console.log("error occurred");
	console.log(result;)
})
