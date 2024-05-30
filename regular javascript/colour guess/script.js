const colors = generateRandomColors(6);
const correctColorIndex = Math.floor(Math.random() * colors.length);
const correctColor = colors[correctColorIndex];
const colorDisplay = document.getElementById('color-display');
const colorBoxes = document.getElementById('color-boxes');

colorDisplay.textContent = correctColor;

for (let i = 0; i < colors.length; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = colors[i];
    colorBox.addEventListener('click', function() {
        if (i === correctColorIndex) {
            alert('Correct! You guessed the color.');
        } else {
            alert('Incorrect. Try again!');
        }
    });
    colorBoxes.appendChild(colorBox);
}

function generateRandomColors(num) {
    const colorArray = [];
    for (let i = 0; i < num; i++) {
        colorArray.push(randomColor());
    }
    return colorArray;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
