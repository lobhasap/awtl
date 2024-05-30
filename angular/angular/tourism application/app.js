// app.js
var app = angular.module('tourismApp', []);

app.controller('TourismController', function($scope) {
    $scope.bookings = [];
    $scope.newBooking = {};

    // Add a new booking
    $scope.addBooking = function() {
        if ($scope.bookingForm.$valid) {
            $scope.bookings.push(angular.copy($scope.newBooking));
            $scope.newBooking = {};
            $scope.bookingForm.$setPristine();
            $scope.bookingForm.$setUntouched();
        }
    };

    // Delete a booking
    $scope.deleteBooking = function(booking) {
        var index = $scope.bookings.indexOf(booking);
        $scope.bookings.splice(index, 1);
    };
});
