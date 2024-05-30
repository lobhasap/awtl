angular.module('blogApp', [])
    .controller('BlogController', function($scope) {
        $scope.posts = [];

        $scope.createPost = function() {
            $scope.posts.push({
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                author: $scope.newPost.author
            });

            // Clear the form fields after submission
            $scope.newPost = {};
        };
    });
