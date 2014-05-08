angular.module('LocalService', []).factory('Local', function($http) {
	return {
		get : function() {
			return $http.get('/api/v1/quote/random/cached');
		}
	}
});