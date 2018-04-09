function Person(firstname,lastname){
	this.firstname=firstname;
	this.lastname=lastname;
}
// Prototype Inheritance

Person.prototype.greet=function(){
	console.log("Hello "+this.firstname+" "+this.lastname);
}


var ashish = new Person("ashish","lakhani");
ashish.greet();
console.log(ashish.__proto__);