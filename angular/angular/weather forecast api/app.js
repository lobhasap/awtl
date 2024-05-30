angular.module('weatherApp', [])
    .controller('WeatherController', function($scope, $http) {
        $scope.loading = true;
        const apiKey = 'db87835caefe744c049568e3e7e0d139';
        const city = 'pune';

        $http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(function(response) {
                $scope.loading = false;
                $scope.weatherData = {
                    city: response.data.name,
                    temperature: response.data.main.temp,
                    weather: response.data.weather[0].description
                    // Add more data as needed
                };
            })
            .catch(function(error) {
                $scope.loading = false;
                $scope.error = 'Error fetching weather data.';
            });
    });
