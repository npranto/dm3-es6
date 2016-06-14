// LET & CONST
{	// let and const are block scoped variables
	let test = "A thing";	// replacement for var
	const test2 = "Another thing";	// const is not changable, it's a constant
}
//console.log(test, test2) // Should condole undefined

for (let i = 0; i < 10; i++) {
	//console.log(i);
}
//console.log(i);	// Should also console undefined since i is only defined inside the for loop

const name = "shakib"
//name = "jack"	// const variables can not be changed

const person = {
	firstName: "Nazmuz",
	lastname: "Shakib"
}
//person = "Nazmuz Shakib"	// can not change person
person.firstName = "Emi"	// is allowed to change keys inside the object


// STRING LITERALS / TEMPLATE STRINGS
const firstName = `Shakib`
const lastName = `Pranto`
const fullName = `${firstName} ${lastName} ${4*3}`
console.log(fullName);

const newLine = `this
is a new life in
Dallas`				// will put each line in newlines


// OBJECTS
//ES5
function makePerson(name, age) {
	return{
		name: name,
		age: age
	}
}
//ES6
function makePerson(name, age) {
	return{
		name,
		age
	}
}


// DYNAMIC OBJECT KEYS
const prefix = `isDynamic`
const myObj = {
	[`thisIsDynamic`]: true,
	[prefix]: true
}
console.log(myObj.thisIsDynamic);
console.log(myObj.isDynamic);


// OBJECT METHOD SHORTHAND
// ES5
var testObj = {
	myMethod: function (param) {
		// does stuff
	}
}
// ES6
// var testObj = {
// 	myMethod (param) {
// 		// does stuff
// 	},
// 	anotherProp: 1,
// 	anotherMethod()
// }
// console.log(testObj.myMethod("Hello"));


//////// ASSIGNMENT DESTRUCTURING ////////
const person2 = {
	firstName: `Nazmuz`,
	lastName: `Shakib`
}
//const {firstName} = person2;
console.log(firstName);		// Should console "Nazmuz"

const mentors = [1, 2, 3];
const [a, b, c] = mentors;
console.log(a);		// consoles 1


/////// ARRAYS ////////

// SPREAD OPERATOR
console.log(...[1,2,3,4,5])		// consoles 1 2 3 4 5
const list = [1,2,3,4,5];
const list2 = [6,7,8,9,10];
const combine = [...list, ...list2] // consoles 1,2,3,4,5,6,7,8,9,10


/////// FUNCTIONS ///////
// ES5
// function justAFunc() {
// 	for (var i = 0; i < arguments.length; i++) {
// 		console.log(arguments[i]);
// 	}
// }
// justAFunc(1,'a','g',2,45,6,66)

// REST PARAM
function function_name(firstName, ...rest) {	// ...rest are arguments that are not passed in
	console.log(firstName)
	for (var i = 0; i < rest.length; i++) {
		console.log(i);
	}
}

// DEFAULT PARAMS
// ES5
// function handler(name, email, password) {
// 	return{
// 		name: name,
// 		email: email,
// 		password: password
// 	}
// }
// ES6
function handler(email, password, name = ``) {	// used if a param is 
	return{
		name, 
		email, 
		password
	}
}


// ARROW FUNCTIONS
//ES5
var arr = [1,2,3,4,5].map(function(item) {
	return item*2;
})

//ES6
const newArr = [1,2,3,4,5].map(item =>{
	return item*2;
})
//Implicit Return: if one line inside function like a return 
// const newArr = [1,2,3,4,5].map(item => item*2);

// const newArr = [1,2,3,4,5].map( (item, index, array) =>{	// for multiple params
// 	return item*2;
// })
// To create a new function using arrow functions, NOT recommended!
const myFunc = () => {
	// do something
}
//instead use... 
// function myFunc() {
// 	// do something
// }

















