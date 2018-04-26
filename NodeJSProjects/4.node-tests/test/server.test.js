const request = require('supertest');
const expect = require('expect');

var app = require('./../server/server').app;



it('should return Hello World response!',(done)=>{
	request(app)
		.get('/')
		.expect(404)
		// .expect({
		// 	error: 'Page Not found!'
		// })
		.expect((res)=>{ // combo of supertest and expect
			expect(res.body).toInclude({
				error: 'Page Not found!'
			});
		})
		.end(done);
});

it('should return my user object',(done)=>{
	request(app)
		.get('/users')
		.expect(200)
		.expect((res)=>{
			expect(res.body).toInclude({
				name: 'Ashish',
				age: 20
			});
		})
		.end(done);
});