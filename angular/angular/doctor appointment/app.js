// app.js
var app = angular.module('doctorApp', []);

app.controller('AppointmentController', function($scope) {
    $scope.appointments = [];
    $scope.newAppointment = {};

    // Add a new appointment
    $scope.addAppointment = function() {
        if ($scope.appointmentForm.$valid) {
            $scope.appointments.push(angular.copy($scope.newAppointment));
            $scope.newAppointment = {};
            $scope.appointmentForm.$setPristine();
            $scope.appointmentForm.$setUntouched();
        }
    };

    // Delete an appointment
    $scope.deleteAppointment = function(appointment) {
        var index = $scope.appointments.indexOf(appointment);
        $scope.appointments.splice(index, 1);
    };
});
