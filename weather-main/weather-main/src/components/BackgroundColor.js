function BackgroundColor(data) {
  let id = 0;
  if (!Array.isArray(data) && data.list[0].weather[0].id) {
    id = data.list[0].weather[0].id;
  }
  function getColorCode(weatherId) {
    // id classification https://openweathermap.org/weather-conditions
      return '#a6ddf0'; // cloudy day
  }

  return getColorCode(Number(id));
}

export default BackgroundColor;
