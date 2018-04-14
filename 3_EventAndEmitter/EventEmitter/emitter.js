function Emitter(){ //functional constructors
	this.events = {};
}

Emitter.prototype.on = function(type,listener){

	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);

} // prototypal inheritance

// it can be understood as
// {
// 	onclick:[function(){},function(){}];
//	onrow:[function(){},function(){}];
// }


Emitter.prototype.emit = function(type){

	if(this.events[type]){

		this.events[type].forEach(function(listener){

			listener();

		});

	}else{
		console.log("You have entered the wrong event type!");
	}

}

module.exports=Emitter;





// event listener:- the code that responds to an event