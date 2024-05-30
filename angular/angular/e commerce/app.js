angular.module('ecommerceApp', [])
    .controller('ProductController', function($scope) {
        $scope.products = [
            {
                name: 'Product 1',
                description: 'Description of Product 1',
                price: 19.99
            },
            {
                name: 'Product 2',
                description: 'Description of Product 2',
                price: 29.99
            },
            {
                name: 'Product 3',
                description: 'Description of Product 3',
                price: 39.99
            }
            // Add more products as needed
        ];
    });
