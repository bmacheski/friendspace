angular
	.module('friendSpace')

	.config(function($routeProvider){
		$routeProvider
			.when('/people', {
				templateUrl: 'assets/people/people.html',
				controller: 'PeopleCtrl',
				controllerAs: 'main'
			})
	})
