angular.module('MainCtrl', []).controller('MainController', function($scope, Main) {

	$scope.tagline = 'Intelligence for life';

	Main.get()
	.success(function(data) {
		$scope.show = true;
		$scope.result = data;
	});

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
