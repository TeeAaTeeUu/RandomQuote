angular.module('LocalCtrl', []).controller('LocalController', function($scope, Local) {

	$scope.tagline = 'Intelligence for life, localized';

	Local.get()
	.success(function(data) {
		$scope.show = true;
		$scope.result = data;
	});

	$scope.newQuote = function() {
		Local.get()
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