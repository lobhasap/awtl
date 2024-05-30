// app.js
var app = angular.module('groceryApp', []);

app.controller('GroceryController', function($scope) {
    $scope.groceryItems = [];
    $scope.newGroceryItem = {};

    // Add a new grocery item
    $scope.addGroceryItem = function() {
        if ($scope.groceryForm.$valid) {
            $scope.groceryItems.push(angular.copy($scope.newGroceryItem));
            $scope.newGroceryItem = {};
            $scope.groceryForm.$setPristine();
            $scope.groceryForm.$setUntouched();
        }
    };

    // Delete a grocery item
    $scope.deleteGroceryItem = function(item) {
        var index = $scope.groceryItems.indexOf(item);
        $scope.groceryItems.splice(index, 1);
    };
});
