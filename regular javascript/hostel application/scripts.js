document.getElementById('hostelForm').addEventListener('submit', function(event) {
    let errorMessages = '';
    let form = event.target;

    let name = form.name.value;
    let email = form.email.value;
    let age = form.age.value;
    let phone = form.phone.value;
    let address = form.address.value;

    if (!name) {
        errorMessages += 'Name is required.<br>';
    }

    if (!email) {
        errorMessages += 'Email is required.<br>';
    } else if (!validateEmail(email)) {
        errorMessages += 'Email is not valid.<br>';
    }

    if (!age) {
        errorMessages += 'Age is required.<br>';
    } else if (age < 18 || age > 100) {
        errorMessages += 'Age must be between 18 and 100.<br>';
    }

    if (!phone) {
        errorMessages += 'Phone number is required.<br>';
    } else if (!validatePhone(phone)) {
        errorMessages += 'Phone number is not valid. It should be 10 digits.<br>';
    }

    if (!address) {
        errorMessages += 'Address is required.<br>';
    }

    if (errorMessages) {
        document.getElementById('errorMessages').innerHTML = errorMessages;
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    let re = /^[0-9]{10}$/;
    return re.test(phone);
}
