angular.module('demo', [])
.controller('Hello', function ($scope, $http) {
    $http.get('api/products').
        then(function (response) {
            $scope.items = response.data;
        });
});