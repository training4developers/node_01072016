"use strict";

const fs = require("fs");


try {

fs.readFile("../demo.js", "utf-8", function(err, data) {

	if (err) {
		console.log(err);
		throw Error(err);
	}

	console.log(data);

});

} catch(err) {
	console.log(err);
}
