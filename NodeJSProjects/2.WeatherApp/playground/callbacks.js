var getUser = (id,callback) => {
	var user = {
		id: id,
		name: 'Vikram'
	};
	setTimeout(()=>{
		callback(user); // it return the user object when to the callback function when this is being called 
	},3000)
	
};

getUser(31,(userObject)=>{ // call back function ,it executes and manages the data when function it calls is returning something
	console.log(userObject);
});