(function() {


    angular.module('lunchCheck', [])

    .controller('LunchCheckController',LunchCheckController)

    LunchCheckController.$inject = ['$scope']

    function LunchCheckController($scope) {
        $scope.lunch = ""
        $scope.result = ""

        $scope.checkLunchQuantity = function() {
            const splitedString = $scope.lunch.split(',').filter((food) => food.trim());
            console.log(splitedString.length)
            if ($scope.lunch) {
                if (splitedString.length <= 3) {
                    $scope.result = "Enjoy!"
                } else {
                    $scope.result = "Too much!"
                }   
            } else {
                $scope.result = "Please enter data first"
            }


        }
    }

})();