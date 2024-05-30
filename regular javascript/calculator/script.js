let displayElement = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = '';
    }
    currentInput += value;
    displayElement.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    displayElement.textContent = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    displayElement.textContent = currentInput;
}
