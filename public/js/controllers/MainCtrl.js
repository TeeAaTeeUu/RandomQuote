angular.module('MainCtrl', []).controller('MainController', function($http, $scope) {

	$scope.tagline = 'Intelligence for life';
	$scope.show = false;

	$scope.newQuote = function() {
		$http.get('/api/v1/quote/random').success( function(data, status, headers, config) {
         	$scope.result = data;
     	})
	}		

	$scope.clearQuote = function() {
		$scope.result = null;
		$scope.show = false;
	}
});