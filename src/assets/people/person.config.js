angular
	.module('friendSpace')

	.config(function ($routeProvider) {
		$routeProvider
			.when('/create', {
				templateUrl : 'static/create.html',
				controller: 'CreateCtrl',
				controllerAs: 'main'
			})
})
