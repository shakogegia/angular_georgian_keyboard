var app = angular.module('myApp', ['GoergianKeyboard']);

app.controller('AppController', ['$scope', function($scope){
	
	console.log("Controller init...");

	$scope.enabled = true;

	$scope.input1 = "Test";

	$scope.onChange = function(){
		console.log($scope.input1);
	}

	$scope.submit = function(){
		console.log("Submit::", $scope.input1);
	}

}]);