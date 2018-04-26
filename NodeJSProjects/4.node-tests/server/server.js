const express = require('express');

var app = express();

app.get('/',(req,res)=>{
	res.status(404).send({
		error: 'Page Not found!'
		// name: 'Todo App'
	});
});

app.get('/',(req,res)=>{
	res.send([{
		name: 'Kaku',
		age: 27
	},{
		name: 'Ashish',
		age: 20
	},{
		name: 'Champion',
		age: 20
	}]);
});

app.listen(3000);

module.exports.app = app;