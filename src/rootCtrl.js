angular.module( `es6Day` )
.controller( `rootCtrl`, function( $scope, userService) {

	$scope.submit = (email, password, username = `guest`) => {
		$scope.user = userService.createUser(email, password, username);
	}

} );



// callbacks practice
// object practice