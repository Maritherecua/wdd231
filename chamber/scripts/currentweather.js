// select the elements in the HTML document
const weatherIcon = document.querySelector('#weather-icon');
const report = document.querySelector('#report');
const forecast = document.querySelector('#forecast');

const lat = 37.7976;
const lon = -121.2161;
const apiKey = '6e61513fe97d8cd50eb738542ab6bc03';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
        weatherIcon.alt = description;
        report.textContent = `${temp}°F - ${description}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));

    function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const city=document.createElement('p')
    city.innerHTML = `City: ${data.city.name}`
    report.appendChild(city)

    const temp=document.createElement('p')
    temp.innerHTML = `${data.list[0].main.temp}&deg;F`
    report.appendChild(temp)
 
    const description=document.createElement('p')
    description.innerHTML = data.list[0].weather[0].description;
    report.appendChild(description)

    const high=document.createElement('p')
    high.innerHTML = `High: ${data.list[0].main.temp_max}&deg;F`
    report.appendChild(high)

    const low=document.createElement('p')
    low.innerHTML = `Low: ${data.list[0].main.temp_min}&deg;F`
    report.appendChild(low)

    const humidity=document.createElement('p')
    humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`
    report.appendChild(humidity)

    const sunrise=document.createElement('p')
    sunrise.innerHTML = `Sunrise: ${unixtime(data.city.sunrise)}am`
    report.appendChild(sunrise)

    const sunset=document.createElement('p')
    sunset.innerHTML = `Sunset: ${unixtime(data.city.sunset)}pm`
    report.appendChild(sunset)

    //forecast
    const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const d = new Date();
   
    const temp1=document.createElement('p')
    temp1.innerHTML = `${dayNames[d.getDay()]}: ${data.list[0].main.temp}&deg;F`
    forecast.appendChild(temp1)


    const temp2=document.createElement('p')
    temp2.innerHTML = `${dayNames[d.getDay()+1]}: ${data.list[8].main.temp}&deg;F`
    forecast.appendChild(temp2)

    const temp3=document.createElement('p')
    temp3.innerHTML = `${dayNames[d.getDay()+2]}: ${data.list[16].main.temp}&deg;F`
    forecast.appendChild(temp3)
  }

    function unixtime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr(-2);
  }