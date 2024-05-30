import ReactPlayer from 'react-player';

function BackgroundSound({ weather, soundEnabled }) {
  function getVideoUrl(weatherId) {
    // id classification https://openweathermap.org/weather-conditions
      return 'https://www.youtube.com/watch?v=PXiyzTf5oaw'; // cloudy day
    
  }

  return (
    <ReactPlayer
      width={0}
      height={0}
      playing={soundEnabled}
      loop={true}
      url={getVideoUrl(Number(weather.id))}
    />
  );
}

export default BackgroundSound;
