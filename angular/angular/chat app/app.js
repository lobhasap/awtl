angular.module('chatApp', [])
    .controller('ChatController', function($scope) {
        $scope.messages = [];
        $scope.newMessage = '';
        $scope.user1 = 'User 1'; // Username for user 1
        $scope.user2 = 'User 2'; // Username for user 2
        $scope.currentSender = $scope.user1; // Start with user 1

        $scope.inputPlaceholder = 'Type your message here (' + $scope.currentSender + ')';

        $scope.sendMessage = function () {
            if ($scope.newMessage.trim() !== '') {
                $scope.messages.push({
                    sender: $scope.currentSender,
                    text: $scope.newMessage
                });
                $scope.newMessage = '';
                $scope.currentSender = ($scope.currentSender === $scope.user1) ? $scope.user2 : $scope.user1; // Switch sender
                $scope.inputPlaceholder = 'Type your message here (' + $scope.currentSender + ')';
                scrollToBottom();
            }
        };

        function scrollToBottom() {
            var chatWindow = document.getElementById('chat-window');
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    });
