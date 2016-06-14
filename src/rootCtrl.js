angular.module( `es6Day` )
.controller( `rootCtrl`, function( $scope, userService) {

	$scope.submit = (email, password, username = `guest`) => {
		$scope.user = userService.createUser(email, password, username);
	}

} );



// callbacks practice
// object practice


function Car(make, model) {
	this.make = make;
	this.model = model
}
var civic = new Car("Honda", "Civic");

//Same as below:

class Car {
	constructor(make, model){
		this.make = make;
		this.model = model;
	}
}

// Ex:
class person{
	constructor(fName, lName, age){
		this.fName = fName;
		this.lName = lName;
		this.age = age;
	}
	logFullName(){
		console.log(`${this.fName} ${this.lName}`)
	}
}

// Inheritance
class baby extends person{
	constructor(fName, lName, age){
		super(fName, lName, age);	// using super gives access to person's properties and methods to the baby class
	}
}

















