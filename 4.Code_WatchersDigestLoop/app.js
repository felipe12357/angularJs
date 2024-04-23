var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.$watch('handle', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    });
    
    $timeout(function() {
       //aqui esta tomando el contexto de angular.. solo pq esta usando $timeout
        $scope.handle = 'newtwitterhandleTEST';
        console.log('Scope changed!');
        
    }, 3000);

    setTimeout(function(){
        //al hacerlo de la forma normal de javascript es necesario utilizar:
        //apply le dice a angular js q tome los cambios
        $scope.$apply(function(){
            $scope.handle = 'newtwitterhandleHolaMundo';
            console.log('Scope changed!');
        });
    },5000)
    
}]);