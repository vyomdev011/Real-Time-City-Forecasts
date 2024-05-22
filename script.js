const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const details = document.querySelector('.climate-info');
const box = document.querySelector('.forecast');

search.addEventListener('click', () => {
    const APIkey = "0c081010450b11388407a9ad13a5bbe4"; //apikey
    const city = document.querySelector('.search-box input').value;

    if (city == '') {
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
        .then(response => response.json()).then(json => {
            let image = document.querySelector('.forecast img');
            const temperature = document.querySelector('.forecast .temperature');
            const description = document.querySelector('.forecast .description');
            const humidity = document.querySelector('.climate-info .humidity span');
            const wind = document.querySelector('.climate-info .wind-info .wind span');
            // const myArr = JSON.parse(weather[0]);
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rainy.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloudy.png';
                    break;

                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = 'images/clear.png';
            }
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${json.wind.speed}Km/h`;

    });
});


