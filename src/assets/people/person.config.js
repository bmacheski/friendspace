angular
	.module('friendSpace')

	.config(function ($routeProvider) {
		$routeProvider
			.when('/create', {
				templateUrl : 'assets/people/create.html',
				controller: 'CreateCtrl',
				controllerAs: 'main'
			})
})
