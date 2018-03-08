(function () {
	'use strict';
	
	angular.module('msgApp', [])
	.controller('msgController',msgController );
	
	MyFirstController.$inject = ['$scope'];// inject protector
	function MyFirstController($scope){
		$scope.name = "";
		$scope.totalVal = 0;
		$scope.stateOfCalc = "calc";
		$scope.sayHello = function(){
			return "Hello "+ $scope.name;
		};
		$scope.calcNameValue = function(){
			var totalNameValue = calaculatNumercFromString($scope.name);
			$scope.totalVal = totalNameValue;
			if($scope.totalVal ==0){
				$scope.stateOfCalc = "calc";
			}
			else{
				$scope.stateOfCalc = "done";
			}
			
		};
	}
	
	function calaculatNumercFromString(string){
		var totalVal = 0;
		for(var i = 0;i<string.length;i++){
			totalVal += string.charCodeAt(i);
		}
		return totalVal;
	}
	
})();