var asyncTask = (a,b) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a+b);
			}else{
				reject('Given parameters are not numbers');
			}
		},1500);
	});
};

asyncTask(3,5).then((result)=>{ 
	console.log(result);
	return asyncTask(result,33);
}).then((res)=>{
	console.log(res);
}).catch((errorMessage)=>{
	console.log(errorMessage);
});


// asyncTask(3,'5').then((result)=>{ // promise chaining (not giving output as we have expected)
// 	console.log(result);
// 	return asyncTask(result,33);
// },(errorMessage)=>{
// 	console.log(errorMessage);
// }).then((res)=>{
// 	console.log(res);
// },(em)=>{
// 	console.log(em);
// });

// var somePromise = new Promise((resolve,reject) => {
// 	setTimeout(()=>{
// 		// resolve("Hey It worked!");
// 		reject('Unable to fulfil promise!');
// 	},2500);
// });

// somePromise.then((message)=>{
// 	console.log(message);
// },(errorMessage)=>{
// 	console.log(errorMessage);
// });

