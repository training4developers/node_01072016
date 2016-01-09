"use strict";

const
	events = require("events")

class UserRepo {

	constructor(connectionString) {

	}

	insert(user) {

	}

	update(user) {

	}

	delete(user) {

	}
}

class User extends events.EventEmitter {

	constructor(userRepo, username, firstName, lastName) {
		super();
		this._userRepo = userRepo;
		this._username = username;
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get username() {
		console.log("getting the username");
		return this._username;
	}

	set username(value) {
		console.log("setting the username");
		this._username = value;
		this._userRepo.update(this);
		this.emit("username_changed", this._username);
	}

}

var u = new User("bsmith", "Bob", "Smith");
console.log(u.username);

u.on("username_changed", function() {
	console.log("username was changed");
});

setTimeout(function() {
	u.username = "bob.smith";
}, 2000);
