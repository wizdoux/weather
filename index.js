// Simulated weather data
const simulatedWeatherData = [
  { day: 'Monday', icon: 'img/sun.png', description: 'Sunny', maxTemp: 25, minTemp: 15 },
  { day: 'Tuesday', icon: 'img/cloud.png', description: 'Cloudy', maxTemp: 22, minTemp: 13 },
  { day: 'Wednesday', icon: 'img/rain.png', description: 'Rainy', maxTemp: 18, minTemp: 10 }
];

// Display simulated weather data
const forecastContainer = document.getElementById('forecast');
simulatedWeatherData.forEach(item => {
  const html = `
    <div class="day">
      <h2>${item.day}</h2>
      <img src="${item.icon}" alt="${item.description}">
      <p>High: ${item.maxTemp}°C Low: ${item.minTemp}°C</p>
      <p>${item.description}</p>
    </div>`;
  forecastContainer.innerHTML += html;
});