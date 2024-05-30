const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function validateForm() {
    let isValid = true;
    if (!validateName()) {
        isValid = false;
    }
    if (!validateEmail()) {
        isValid = false;
    }
    if (!validatePassword()) {
        isValid = false;
    }
    if (isValid) {
        form.submit();
    }
}

function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        nameError.textContent = 'Name is required.';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        emailError.textContent = 'Email is required.';
        return false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Invalid email format.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '') {
        passwordError.textContent = 'Password is required.';
        return false;
    } else if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}
