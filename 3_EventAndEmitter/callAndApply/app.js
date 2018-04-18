var obj ={
	name: "John Doe",
	greet: function(){
		console.log(`Hello ${this.name}`);
	}
} 

obj.greet();// outputs Hello John Doe

obj.greet.call({name:"Jane Doe"});// difference is the argument we pass into call function is referred by this, we pass parameters normally
obj.greet.apply({name:"Jene Doe"}); // we pass an array of parameters in this case [param1,param2...]