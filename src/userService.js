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