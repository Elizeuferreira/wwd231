// getDates.js

// Atualiza o ano no rodapé
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Atualiza data da última modificação do documento
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// === WEATHER ===
const apiKey = '6caeed8465fb450f48be3649267d206a'; // substitua com sua chave da OpenWeatherMap
const city = 'Manaus';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('current-temp').textContent = `${data.main.temp.toFixed(1)} °C`;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const weatherIcon = document.getElementById('weather-icon');
    const figcaption = weatherIcon.nextElementSibling;

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = description;
    figcaption.textContent = description.charAt(0).toUpperCase() + description.slice(1);
  })
  .catch(error => {
    document.getElementById('current-temp').textContent = 'Unavailable';
    console.error('Erro ao buscar clima:', error);
  });

// === PAGE VISITS ===
const visitDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;
visitDisplay.textContent = numVisits;
localStorage.setItem("visits-ls", ++numVisits);

