const expect = require('expect');

const utils = require('./utils');

describe('Utils',()=>{

	it('should add two numbers', ()=>{
		var res = utils.add(33,11);

		expect(res).toBe(44).toBeA('number');

		// if(res != 44){
		// 	throw new Error(`Expected 44, but got ${res}`);
		// }
	});

	it('should async add two numbers',(done)=>{

		utils.asyncAdd(2,3,(sum)=>{
			expect(sum).toBe(5).toBeA('number'); // our assertions are passing for the wrong the testcases also
			done();
		});

	});

	it('should return square of a number',()=>{
		var res = utils.square(4);
		
		expect(res).toBe(16).toBeA('number');
	});

	it('should async square a number',(done)=>{

		utils.asyncSquare(3,(result)=>{
			expect(result).toBe(9).toBeA('number');
			done();
		});

	});


	
});

it('should add two numbers', ()=>{
	var res = utils.add(33,11);

	expect(res).toBe(44).toBeA('number');

	// if(res != 44){
	// 	throw new Error(`Expected 44, but got ${res}`);
	// }
});

it('should async add two numbers',(done)=>{

	utils.asyncAdd(2,3,(sum)=>{
		expect(sum).toBe(5).toBeA('number'); // our assertions are passing for the wrong the testcases also
		done();
	});

});

it('should return square of a number',()=>{
	var res = utils.square(4);
	
	expect(res).toBe(16).toBeA('number');
});

it('should async square a number',(done)=>{

	utils.asyncSquare(3,(result)=>{
		expect(result).toBe(9).toBeA('number');
		done();
	});

});

it('should expect some values',()=>{
	// expect(12).toNotBe(11);
	// expect({name:'Andrew'}).toEqual({name:'Andrew'}); // for arrays and objects 
	// expect([2,5,4]).toInclude(5); // check if it has the element mentioned 
	expect({
		name: 'Ashish',
		age: 25
	}).toInclude({
		age: 25
	});
});


it('should verify firstname and lastname are set',()=>{
	var user = {
		age: 24,
		location: 'Delhi'
	};
	user = utils.setName(user,'Ashish Lakhani');
	expect(user).toInclude({firstName:'Ashish',lastName:'Lakhani'});
});







