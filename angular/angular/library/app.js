// app.js
var app = angular.module('libraryApp', []);

app.controller('LibraryController', function($scope) {
    $scope.books = [];
    $scope.members = [];
    $scope.borrowRecords = [];
    $scope.newBook = {};
    $scope.newMember = {};
    $scope.borrow = {};
    $scope.editingBook = false;
    $scope.editingMember = false;
    $scope.selectedBook = {};
    $scope.selectedMember = {};

    // Book Management
    $scope.addBook = function() {
        $scope.books.push(angular.copy($scope.newBook));
        $scope.newBook = {};
    };

    $scope.deleteBook = function(book) {
        var index = $scope.books.indexOf(book);
        $scope.books.splice(index, 1);
    };

    $scope.editBook = function(book) {
        $scope.editingBook = true;
        $scope.selectedBook = angular.copy(book);
        $scope.originalBook = book;
    };

    $scope.updateBook = function() {
        var index = $scope.books.indexOf($scope.originalBook);
        $scope.books[index] = angular.copy($scope.selectedBook);
        $scope.cancelEditBook();
    };

    $scope.cancelEditBook = function() {
        $scope.editingBook = false;
        $scope.selectedBook = {};
        $scope.originalBook = {};
    };

    // Member Management
    $scope.addMember = function() {
        $scope.members.push(angular.copy($scope.newMember));
        $scope.newMember = {};
    };

    $scope.deleteMember = function(member) {
        var index = $scope.members.indexOf(member);
        $scope.members.splice(index, 1);
    };

    $scope.editMember = function(member) {
        $scope.editingMember = true;
        $scope.selectedMember = angular.copy(member);
        $scope.originalMember = member;
    };

    $scope.updateMember = function() {
        var index = $scope.members.indexOf($scope.originalMember);
        $scope.members[index] = angular.copy($scope.selectedMember);
        $scope.cancelEditMember();
    };

    $scope.cancelEditMember = function() {
        $scope.editingMember = false;
        $scope.selectedMember = {};
        $scope.originalMember = {};
    };

    // Borrow/Return Management
    $scope.borrowBook = function() {
        $scope.borrowRecords.push({
            book: $scope.borrow.book,
            member: $scope.borrow.member
        });
        $scope.borrow = {};
    };

    $scope.returnBook = function(entry) {
        var index = $scope.borrowRecords.indexOf(entry);
        $scope.borrowRecords.splice(index, 1);
    };
});
