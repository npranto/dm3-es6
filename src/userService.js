angular.module(`es6Day`)
	.factory(`userService`, function(){

		let userData = {};

		return{
			createUser(email, password, username) {
				userData = {
					email,
					password,
					username
				}
				return userData;
			}
		}
// end of userService
	});


// Another way of doing the same task as above using classes
class UserService{
	constructor(){
		this.userData = {};
	}
	createUser(username, email, password){
		this.userData = {
			email,
			password,
			username
		}
	}
}

angular.module(`es6Day`)
	.service('userService', UserService);



// end of userService		
	})