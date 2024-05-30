// app.js
var app = angular.module('taskApp', []);

app.controller('TaskController', function($scope) {
    $scope.tasks = [];
    $scope.newTask = {};

    // Add a new task
    $scope.addTask = function() {
        if ($scope.taskForm.$valid) {
            $scope.tasks.push(angular.copy($scope.newTask));
            $scope.newTask = {};
            $scope.taskForm.$setPristine();
            $scope.taskForm.$setUntouched();
        }
    };

    // Delete a task
    $scope.deleteTask = function(task) {
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
    };
});
