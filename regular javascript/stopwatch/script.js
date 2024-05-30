let seconds = 0;
let intervalId = null;

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            seconds++;
            const time = formatTime(seconds);
            document.getElementById('stopwatch').textContent = time;
        }, 1000);
    }
}

function stopStopwatch() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secondsRemaining)}`;
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}
