document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    const summary = document.getElementById('summary');
    const responseSummary = document.getElementById('responseSummary');

    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form elements
        const q1 = document.getElementById('q1').value;
        const q2 = document.getElementById('q2').value;
        const q3 = document.getElementById('q3').value;

        // Display summary
        responseSummary.innerHTML = `
            <li>Question 1: ${q1}</li>
            <li>Question 2: ${q2}</li>
            <li>Question 3: ${q3}</li>
        `;
        summary.classList.remove('hidden');
    });
});
