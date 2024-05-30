function BackgroundImage(data) {
  let id = 0;
  if (!Array.isArray(data) && data.list && data.list[0].weather && data.list[0].weather[0].id) {
    id = data.list[0].weather[0].id;
  }
  
  function getImageUrl(weatherId) {
    return 'https://i.gifer.com/Rnim.gif';
  }

  return getImageUrl(Number(id));
}

export default BackgroundImage;
