angular
	.module('friendSpace')

	.controller('PeopleCtrl', function ($location, Person){
		var vm = this;

		Person.getAll(function(people){
			vm.people = people;
		})
	})
