"use strict";

function newFn() {
	console.log(t);
}

function myFunc() {

	var t = 1000;

	setTimeout(function() {
		t = 2000
	},1000);

	return newFn;


}

var fn = myFunc();
fn();

setTimeout(function() {
	fn();
},2000)
