// arrow-function can be used in filter,foreach to and can do our work in one line.
// there is no need to write return statement explicitly if our arrow function contains only one-line
// arrow-function do not bind with 'this' keyword
// arrow-function also do not bind with arrays in arguments, we will get global argument variables


var square = (x) => x * x;
console.log(square(9));

var user = {
	name: 'Andrew',
	sayHi: () => {
		console.log(arguments);
		console.log(`Say hi ${this.name}`); // Say hi 'undefined'
	},
	sayHiAlt () { // es-6 syntax, this is no arrow-function, no need to write 'function' keyword explicitly
		console.log(arguments);
		console.log(`Say hi ${this.name}`); 
	}
}

user.sayHi(1,2,3);