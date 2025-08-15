async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '5effefcd76e9a30a3b3dbbfb7b9a0611';  // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById('result').innerHTML = "City not found!";
    } else {
      const { name, main, weather } = data;
      document.getElementById('result').innerHTML = `
        <h2>${name}</h2>
        <p>🌡 Temperature: ${main.temp}°C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
        <p>☁ Condition: ${weather[0].description}</p>
      `;
    }
  } catch (error) {
    document.getElementById('result').innerHTML = "Error fetching data.";
  }
}
