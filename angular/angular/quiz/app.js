// app.js
var app = angular.module('quizApp', []);

app.controller('QuizController', function($scope) {
    $scope.questions = [
        {
            id: 1,
            text: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            id: 2,
            text: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            id: 3,
            text: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
            answer: "Harper Lee"
        },
        {
            id: 4,
            text: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
            answer: "Blue Whale"
        },
        {
            id: 5,
            text: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "N2"],
            answer: "H2O"
        }
    ];

    $scope.userAnswers = {};
    $scope.showResults = false;
    $scope.score = 0;

    $scope.submitQuiz = function() {
        $scope.score = 0;
        $scope.showResults = true;

        $scope.questions.forEach(function(question) {
            if ($scope.userAnswers[question.id] === question.answer) {
                $scope.score++;
            }
        });
    };
});
