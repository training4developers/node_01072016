module.exports = function(options) {

	"use strict";

	const
		http = require("http"),
		express = require("express");

	let
		app = express(),
		server = http.createServer(app);

	app.use("/api", require("body-parser").json());
	app.use("/api", require("./routers/employees"));

	app.use(express.static(options.webServer.rootFolder));

	return {
		start: function(done) {

			server.listen(options.webServer.port, function(err) {

				console.log("starting...");

				if (err) {
					console.log(err);
					done(err);
					return;
				}

				done(null);
			});

		},

		stop: function(done) {

			server.close(function(err) {

				console.log("stopping...");

				if (err) {
					console.log(err);
					done(err);
					return;
				}

				done(null);
			});

		}
	}





};
