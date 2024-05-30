// app.js
var app = angular.module('financeApp', []);

app.controller('FinanceController', function($scope) {
    $scope.transactions = [];
    $scope.newTransaction = {};

    // Add a new transaction
    $scope.addTransaction = function() {
        if ($scope.transactionForm.$valid) {
            $scope.transactions.push(angular.copy($scope.newTransaction));
            $scope.newTransaction = {};
            $scope.transactionForm.$setPristine();
            $scope.transactionForm.$setUntouched();
        }
    };

    // Delete a transaction
    $scope.deleteTransaction = function(transaction) {
        var index = $scope.transactions.indexOf(transaction);
        $scope.transactions.splice(index, 1);
    };

    // Calculate total income
    $scope.getTotalIncome = function() {
        return $scope.transactions
            .filter(transaction => transaction.type === 'income')
            .reduce((total, transaction) => total + transaction.amount, 0);
    };

    // Calculate total expense
    $scope.getTotalExpense = function() {
        return $scope.transactions
            .filter(transaction => transaction.type === 'expense')
            .reduce((total, transaction) => total + transaction.amount, 0);
    };

    // Calculate net balance
    $scope.getNetBalance = function() {
        return $scope.getTotalIncome() - $scope.getTotalExpense();
    };
});
