document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        let score = 0;

        // Get answers
        const answers = {
            q1: quizForm.elements['q1'].value,
            q2: quizForm.elements['q2'].value,
            q3: quizForm.elements['q3'].value,
            q4: quizForm.elements['q4'].value,
            q5: quizForm.elements['q5'].value
        };

        // Check answers
        if (answers.q1 === 'false') {
            score++;
        }
        if (answers.q2 === 'true') {
            score++;
        }
        if (answers.q3 === 'false') {
            score++;
        }
        if (answers.q4 === 'true') {
            score++;
        }
        if (answers.q5 === 'true') {
            score++;
        }

        // Display result
        scoreDisplay.textContent = `Your score: ${score} out of 5`;
        resultDiv.classList.remove('hidden');
    });
});
