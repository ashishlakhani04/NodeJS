console.log('Starting notes.js!');
// console.log(module);
module.exports.age = 25;
module.exports.check = function(){
	if(this.age>20){
		console.log("sahi h");
	}
	else{
		console.log("bekar");
	}
}
// console.log(module);