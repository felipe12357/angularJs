var myApp = angular.module('myApp');
//aca incluyo 2 servicios mas aparte del scope
myApp.controller('mainController', function($scope,$filter,$log) {
    $scope.name ="Andréss";
    $scope.occupation = "Developer";

    $scope.formattedName = $filter('uppercase')($scope.name);

    $scope.getname = function(){
        $log.info($scope.name,$scope.formattedName);
    }
    console.log($scope);
    $scope.getname();
});