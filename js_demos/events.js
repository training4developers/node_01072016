"use strict";

const
	events = require("events");

class Person extends events.EventEmitter {

	constructor(firstName, lastName) {
		super();
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get firstName() {
		console.log("getting firstname");
		return this._firstName;
	}

	set firstName(value) {
		console.log("setting firstname: " + value);
		this._firstName = value;
		this.emit("firstname_changed", this._firstName);
	}

	get lastName() {
		return this._lastName;
	}

	set lastName(value) {
		this._lastName = value;
	}

	getFullName() {
		return this._firstName + " " + this._lastName;
	}
}

var p = new Person("Bob", "Smith");
console.log(p.getFullName());


// console.dir(p, { colors: true });
//
// p.on("firstname_changed", function(newFirstName) {
// 	console.log("firstname_changed: " + newFirstName);
// });
//
// setTimeout(function() {
// 	p.firstName = "Mike";
// }, 2000);
