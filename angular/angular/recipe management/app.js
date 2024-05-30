// app.js
var app = angular.module('recipeApp', []);

app.controller('RecipeController', function($scope) {
    $scope.recipes = [];
    $scope.newRecipe = {};
    $scope.editing = false;
    $scope.selectedRecipe = {};

    $scope.addRecipe = function() {
        $scope.recipes.push(angular.copy($scope.newRecipe));
        $scope.newRecipe = {};
    };

    $scope.deleteRecipe = function(recipe) {
        var index = $scope.recipes.indexOf(recipe);
        $scope.recipes.splice(index, 1);
    };

    $scope.editRecipe = function(recipe) {
        $scope.editing = true;
        $scope.selectedRecipe = angular.copy(recipe);
        $scope.originalRecipe = recipe;
    };

    $scope.updateRecipe = function() {
        var index = $scope.recipes.indexOf($scope.originalRecipe);
        $scope.recipes[index] = angular.copy($scope.selectedRecipe);
        $scope.cancelEdit();
    };

    $scope.cancelEdit = function() {
        $scope.editing = false;
        $scope.selectedRecipe = {};
        $scope.originalRecipe = {};
    };
});
