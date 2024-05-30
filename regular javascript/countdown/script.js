// Set the target date and time for the countdown
const countdownDate = new Date('May 31, 2024 00:00:00').getTime();

// Update the countdown every second
const timer = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the time difference between now and the countdown date
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds from the time difference
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the timer element, formatted with leading zeros
    document.getElementById('timer').innerHTML = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // If the countdown is finished, display "EXPIRED" and stop the timer
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = 'EXPIRED';
    }
}, 1000);
