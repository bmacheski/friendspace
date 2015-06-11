angular
	.module('friendSpace')

	.config(function($routeProvider){
		$routeProvider
			.when('/login', {
				templateUrl: 'assets/auth/login.html',
				controller: 'LoginCtrl',
				controllerAs: 'auth'
			})
	})
