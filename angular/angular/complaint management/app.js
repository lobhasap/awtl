// app.js
var app = angular.module('complaintApp', []);

app.controller('ComplaintController', function($scope) {
    $scope.complaints = [];
    $scope.newComplaint = {};

    // Add a new complaint
    $scope.addComplaint = function() {
        if ($scope.complaintForm.$valid) {
            $scope.complaints.push(angular.copy($scope.newComplaint));
            $scope.newComplaint = {};
            $scope.complaintForm.$setPristine();
            $scope.complaintForm.$setUntouched();
        }
    };

    // Delete a complaint
    $scope.deleteComplaint = function(complaint) {
        var index = $scope.complaints.indexOf(complaint);
        $scope.complaints.splice(index, 1);
    };
});
