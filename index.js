"use strict";

const
	fs = require("fs"),
	app = require("./app/app");

//process.argv[2] ||
fs.readFile("config.json", "utf-8", function(err, data) {

	if (err) {
		console.log(err);
		return;
	}

	var options = JSON.parse(data);

	let
		myApp = app(options);

	myApp.start(function() {
		console.log("web server listening on port 8080");
	});

})
