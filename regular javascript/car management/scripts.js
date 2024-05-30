document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting immediately
        let valid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            valid = false;
            nameError.textContent = "Name is required.";
        } else {
            nameError.textContent = "";
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            valid = false;
            emailError.textContent = "Please enter a valid email address.";
        } else {
            emailError.textContent = "";
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            valid = false;
            messageError.textContent = "Message is required.";
        } else {
            messageError.textContent = "";
        }

        if (valid) {
            // Display success message
            const successMessage = document.createElement("p");
            successMessage.textContent = "Details submitted successfully!";
            successMessage.classList.add("success");
            form.appendChild(successMessage);

            // Clear the form fields
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";

            // Remove the success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    });
});
