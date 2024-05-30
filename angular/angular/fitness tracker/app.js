angular.module('FitnessTrackerApp', [])
    .controller('MainController', function($scope) {
        $scope.trackerData = {
            steps: 0,
            calories: 0,
            workouts: []
        };

        $scope.addWorkout = function() {
            if ($scope.newWorkout) {
                $scope.newWorkout.id = Date.now(); // Assign a unique identifier
                $scope.trackerData.workouts.push({
                    id: $scope.newWorkout.id,
                    name: $scope.newWorkout.name,
                    calories: $scope.newWorkout.calories,
                    steps: $scope.newWorkout.steps
                });
                $scope.trackerData.calories += $scope.newWorkout.calories;
                $scope.trackerData.steps += $scope.newWorkout.steps;
                updateLocalStorage();
                $scope.newWorkout = {}; // Clear form after submission
            }
        };

        function updateLocalStorage() {
            localStorage.setItem('fitnessData', JSON.stringify($scope.trackerData));
        }

        $scope.clearLocalStorage = function() {
            localStorage.removeItem('fitnessData');
            $scope.trackerData = {
                steps: 0,
                calories: 0,
                workouts: []
            };
        };

        // Load data from localStorage on initialization
        function init() {
            var data = localStorage.getItem('fitnessData');
            if (data) {
                $scope.trackerData = JSON.parse(data);
            }
        }

        init();
    });
