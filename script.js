const weatherBlock = document.getElementById('weather');

async function loadWeather(e) {
    const link = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Milan&appid=8850189167219464cfa58017d737213a'
    const response = await fetch(link, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data){
  
    const city = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const feel = data.main.feels_like;
    const wind = data.wind.speed; 

    const template =`
    <div id="weather_blc">
        <p class="city">Город: ${city}</p>
        <p class="temp">Температура: ${temp} C</p>
        <p class="humidity">Влажность: ${humidity} %</p>
        <p class="feels">Ощущение температуры: ${feel} C</p>
        <p class="wind">Скорость ветра: ${wind} м/с</p>
    </div>`

    weatherBlock.innerHTML = template;
}

if (weatherBlock) {
    loadWeather();
}