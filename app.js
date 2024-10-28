(function () {
'use strict'

angular.module('myFirstApp', [])

.controller('MyFirstController', ['$scope',myFirstController])

.controller('NameCalculatorController', ['$scope',nameCalculatorController])

.controller('DIController',['$scope', '$filter','$injector', DIController])

.controller('MsgController', ['$scope', MsgController]);

function myFirstController($scope) {
    $scope.name = "Jorge"
    $scope.sayHello = function () {
        return "Hello Coursera"
    }
}

function nameCalculatorController($scope) {
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function () {
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue
    };

    function calculateNumericForString(string) {
        var totalStringValue = 0;
        for (let i = 0; i < string.length; i++) {
            totalStringValue += string.charCodeAt(i)
        }

        return totalStringValue;
    }
}

function DIController ($scope, $filter, $injector) {
  $scope.name = "Jorge";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}

console.log(DIController.toString());

MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.name = "Jorge";
  $scope.stateOfBeing = "tired";

  $scope.sayMessage = function () {
    return "Jorge loves to take naps";
  };

  $scope.rest = function () {
    $scope.stateOfBeing = "rested";
  };
}
})();