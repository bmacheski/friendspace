angular
	.module('friendSpace')

	.controller('LogoutCtrl', function($rootscope, $scope, $location, API_URL){
		var fb = new Firebase(API_URL);

		fb.unauth(function(){
			$rootscope.auth = null;
			$location.path('/login')
			$scope.$apply();
		})
	})
