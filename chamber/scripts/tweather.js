// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat= "49.75"
const lon= "6.63"
const apiKey = "6e61513fe97d8cd50eb738542ab6bc03";

async function apiFetch() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            currentTemp.textContent = `${data.main.temp.toFixed(1)}°C`;
            weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            weatherIcon.setAttribute('alt', data.weather[0].description);
            captionDesc.textContent = data.weather[0].description;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

getWeather();