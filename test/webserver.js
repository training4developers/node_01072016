"use strict";

const
	app = require("../app/app.js"),
	request = require("request"),
	assert = require("chai").assert;

describe("web server", function() {

	var theApp;

	beforeEach(function(done) {

		theApp = app({
			webServer: {
				port: 8080,
				rootFolder: "app/www"
			}
		});

		theApp.start(function() {
			console.log("starting the web server");
			done();
		});

	});

  it("load homepage", function (done) {

		request("http://localhost:8080", function(err, response, body) {

			assert.isNull(err);
			assert.isNotNull(body);
			done();

		});

	});

	it("get all employees", function (done) {

		request("http://localhost:8080/api/employees",
			function(err, response, body) {

				assert.isNull(err);
				let employees = JSON.parse(body);
				assert.equal(employees.length, 5);
				done();

			});

	});

	afterEach(function(done) {

		theApp.stop(function() {
			console.log("stopping the web server");
			done();
		});

	});


});
