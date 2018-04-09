var person = {
	firstname: "Ashish",
	lastname: "Lakhani",
	greet: function(){
		console.log("Hello "+this.firstname+" "+this.lastname);
	}
};

person.greet();
console.log(person['firstname']);