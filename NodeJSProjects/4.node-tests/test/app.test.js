const expect = require('expect');
const rewire = require('rewire');

var app = rewire('.');

describe('App',()=>{
	var db = {
		saveUser: expect.createSpy();
	};
	app.__set__('db',db);
	it('should call the spy correctly',()=>{
		var spy = expect.createSpy();
		// spy();
		// expect(spy).toHaveBeenCalled(); // check if spy called or not
		spy('Ashish',20);
		expect(spy).toHaveBeenCalledWith('Ashish',20);
	});
	it('should call saveUser with user object',()=>{
		var email = 'ashish@gmail.com';
		var password = '123456';
		app.handleSignup(email,password);
		expect(db.saveUser).toHaveBeenCalledWith({email,password});
	});
});