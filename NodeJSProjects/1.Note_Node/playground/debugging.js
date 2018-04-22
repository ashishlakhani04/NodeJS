var person = {
	name: 'Andrew'
};
person.age = 26;

debugger; // we can use this to break here and not on every line and command 'c' to come to this line at one go and another 'c' to read the lines below 

person.name = 'Mike';
console.log(person);





// start the debugging mode by command: node inspect <filename>
// list(10) shows the 10 line above and below from the position where it was paused
// (function (exports, require, module, __filename, __dirname), this is a wrapper function
// 		inserted by nodejs and every piece of code we write is wrapped in this function
// 'n' it is a command used in debug mode which is a short form of next to carry on the process
// 'c'	Continue (may be allowed, depends on reason debug was entered) end Terminate debugger
// 'repl' Open debugger's repl for evaluation in debugging script's context




// debugging via Chrome dev tools
// node --inspect-brk