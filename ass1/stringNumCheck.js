(function () {
    'use strict';

    angular.module('stringCalc',[])
        .controller('calcInstances',calcInstances);
    calcInstances.$inject = ['$scope'];
    function calcInstances($scope){
        $scope.order = "";
        $scope.result = "none";
        $scope.instances = 0;
        $scope.calcDishes = function () {
            var totalDish = ($scope.order).split(",").length;
            $scope.instances = totalDish;
            if(totalDish >3)
                $scope.result = "There Are too much instances";
            else
                $scope.result = "Bon Appetit !";

        };
        $scope.check = function(){
            return "It Worked!";
        };
    }

})();