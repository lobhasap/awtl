const apiKey = 'db87835caefe744c049568e3e7e0d139';
const city = 'Goa';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weatherIcon = data.weather[0].icon;
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const location = `${data.name}, ${data.sys.country}`;

        document.getElementById('weather-icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="Weather Icon">`;
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('description').textContent = description;
        document.getElementById('location').textContent = location;
    })
    .catch(error => {
        console.error('Error:', error);
    });
