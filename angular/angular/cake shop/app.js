// app.js
var app = angular.module('cakeShopApp', []);

app.controller('CakeShopController', function($scope) {
    $scope.orders = [];
    $scope.newOrder = {};

    // Add a new order
    $scope.addOrder = function() {
        if ($scope.orderForm.$valid) {
            $scope.orders.push(angular.copy($scope.newOrder));
            $scope.newOrder = {};
            $scope.orderForm.$setPristine();
            $scope.orderForm.$setUntouched();
        }
    };

    // Delete an order
    $scope.deleteOrder = function(order) {
        var index = $scope.orders.indexOf(order);
        $scope.orders.splice(index, 1);
    };
});
