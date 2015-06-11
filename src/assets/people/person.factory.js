angular
	.module('friendSpace')

	.factory('Person', function($http, API_URL){
		return {
			create(data, cb){
				$http
					.post(`${API_URL}/people.json`, data)
					.success(cb);
			},
			 getAll(cb) {
        		$http
          			.get(`${API_URL}/people.json`)
          			.success(cb);
      		}
		}
	})
