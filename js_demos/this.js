"use strict";

function doSomething(a,b,c) {
	console.log("did it!");
	console.log(a,b,c);
	console.dir(this, { depth: 0 });
}

// doSomething();
//
// global.doSomething = doSomething;
// global.doSomething();
//
// var o = {
// 	id: 2,
// 	doSomething: doSomething
// };
//
// o.doSomething();
//
// console.log(o.doSomething === doSomething);
//
// setTimeout(o.doSomething, 2000);
//
// o.doSomething.call({
// 	id:3
// }, 1,2,3);
//
// o.doSomething.apply({
// 	id:3
// }, [1,2,3]);

var fn = doSomething.bind({
	id:4
},1,2);

fn(5);

fn.call({
	id: 5
});

function bindFn(fn, context) {
	return function() {
		fn.call(context);
	}
}

var fn2 = bindFn(doSomething, { id: 6});
fn2.call({ id: 7 });
