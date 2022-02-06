const APIKey = "934eb5d41c7e9486a38e0587aac82ebf";
const searchCity = document.querySelector("#searchCity");
const searchBtn = document.getElementById("#searchBtn");
const currentCity = document.querySelector(".currentCity");
const fiveDay = document.querySelector(".fiveDay");

let weatherApp = {
    fetchWeather: (searchCity) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKey}&units=imperial`, {
            method: 'GET',
            credentials: 'same-origin',
            redirect: 'follow'
            })
            .then(response => {
                return response.json()
            })
            .then((data) => this.renderWeather(data));
    },
        
    renderWeather: (data) => {
        const { name } = (data);
        const { icon, description } = data.weather;
        const { temp, humidty } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidty, speed);
    }
}

// searchBtn.addEventListener('click', fetchWeather());