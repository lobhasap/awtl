// app.js
var app = angular.module('todoApp', []);

app.controller('TodoController', function($scope) {
    $scope.todos = [];
    $scope.newTodo = {};

    // Add a new to-do
    $scope.addTodo = function() {
        if ($scope.todoForm.$valid) {
            $scope.todos.push({
                task: $scope.newTodo.task,
                completed: false
            });
            $scope.newTodo = {};
            $scope.todoForm.$setPristine();
            $scope.todoForm.$setUntouched();
        }
    };

    // Delete a to-do
    $scope.deleteTodo = function(todo) {
        var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    };
});
