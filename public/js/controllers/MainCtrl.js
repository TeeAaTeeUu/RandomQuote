angular.module('MainCtrl', []).controller('MainController', function($scope, Main) {

	$scope.tagline = 'Intelligence for life';

	$scope.newQuote = function() {
		Main.get()
		.success(function(data) {
			$scope.show = true;
			$scope.result = data;
		});
	}		

	$scope.clearQuote = function() {
		$scope.result = null;
		$scope.show = null;
	}
});