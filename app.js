(function () {
	'use strict';
	
	angular.module('myFirstApp', [])
	
	.controller('MyFirstController', function($scope){
		$scope.name = "";
		$scope.totalVal = 0;
		$scope.sayHello = function(){
			return "Hello "+ $scope.name;
		};
		$scope.calcNameValue = function(){
			var totalNameValue = calaculatNumercFromString($scope.name);
			$scope.totalVal = totalNameValue;
		};
	});
	
	function calaculatNumercFromString(string){
		var totalVal = 0;
		for(var i = 0;i<string.length;i++){
			totalVal += string.charCodeAt(i);
		}
		return totalVal;
	}
	
})();