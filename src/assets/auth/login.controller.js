angular
	.module('friendSpace')

	.controller('LoginCtrl', function(){
		var vm = this;

		vm.login = function(){
			var fb = new Firebase(API_URL);
		}
	})
