document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Reset previous error messages
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validate username
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            return;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            return;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format';
            return;
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            return;
        }

        // If all validations pass, registration is successful
        alert('Registration successful!');
        window.location.href = 'home.html'; // Redirect to home page
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
