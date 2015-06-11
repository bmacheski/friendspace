angular
	.module('friendSpace')

	.controller('PersonCtrl', function($routeParams, $location, Person){
		var vm = this;

		vm.id = $routeParams.id;

		Person.getOne(vm.id, function(data){
			vm.person = data;
		});
	})
