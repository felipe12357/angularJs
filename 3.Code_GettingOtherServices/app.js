var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope,$resource) {
    var PhoneRequest = $resource('phones.json',{},{
        query: {method: 'get', isArray: true, cancellable: true}
    });

    $scope.name ="Andres";
    
    PhoneRequest.query().$promise.then((response)=>{
        console.log(response);
        $scope.phones = response;
        response.forEach(element => {
            console.log(element);
        });
    });

});