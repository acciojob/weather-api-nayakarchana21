document.getElementById('getWeather').addEventListener('click', () => {
  // You need to replace YOUR_API_KEY with your own API key from OpenWeatherMap
  const API_KEY = 'YOUR_API_KEY';
  const city = 'London';
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then((response) => response.json()) 
    .then((data) => {
      document.getElementById('weatherInfo').innerHTML = 
        `Current weather in ${city}: ${data.weather[0].description}`;
    })
    .catch((error) => {
      console.error(error);
      document.getElementById('weatherInfo').innerHTML = 
        'Unable to retrieve weather information';
    });
});
