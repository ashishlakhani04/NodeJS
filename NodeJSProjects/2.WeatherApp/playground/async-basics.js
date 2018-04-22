console.log('Starting app');

// we are registering to fired it after 2 seconds, not telling to wait
setTimeout(()=>{
	console.log('Inside from setTimeout!')
},2000); // to prove that node is Async

setTimeout(()=>{
	console.log('Inside from second setTimeout!')
},0);

console.log('Finishing up');