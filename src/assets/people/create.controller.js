angular
	.module('friendSpace')

	.controller('CreateCtrl', function($routeParams, Person){
		var vm = this;

		vm.createPerson = function(){
			Person.create(vm.person, function(){

			})
		}
	})
