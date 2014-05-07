angular.module('MainService', []).factory('Main', function($http) {
	return {
		get : function() {
			return $http.get('/api/v1/quote/random');
		}
	}
});