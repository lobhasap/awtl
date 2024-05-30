function submitForm(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');

    // Simple email validation
    if (!emailInput.checkValidity()) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    } else {
        emailError.textContent = "";
    }

    var formData = {
        firstName: document.getElementById('firstName').value,
        middleName: document.getElementById('middleName').value,
        lastName: document.getElementById('lastName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        email: document.getElementById('email').value
    };

    document.body.innerHTML = `
        <div style="text-align: center; margin-top: 20px;">
            <h2>Details submitted successfully!</h2>
            <p>First Name: ${formData.firstName}</p>
            <p>Middle Name: ${formData.middleName}</p>
            <p>Last Name: ${formData.lastName}</p>
            <p>Phone Number: ${formData.phoneNumber}</p>
            <p>Email: ${formData.email}</p>
        </div>
    `;
}
