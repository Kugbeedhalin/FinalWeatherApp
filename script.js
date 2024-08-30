const apikey = "7eb0eabf406227f6ec33aba5b95e5e65";
const apiurl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const weatherIconElement = document.getElementById("weatherIcon");

searchButton.addEventListener('click', () => {
  const location = locationInput.value ;
  if (location){
    fetchweather(location);
  }
});

function fetchweather(location){
  const url = `${apiurl}?q=${location}&appid=${apikey}&units=metric`;

  fetch(url)
      .then(response => response.json())
      .then(data =>{
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        weatherIconElement.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
      })
      .catch(error => {
        console.error("Error Fetching weather data: ", error);
      });
}