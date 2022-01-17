const APIKey = "934eb5d41c7e9486a38e0587aac82ebf";
const searchCity = document.querySelector("#searchCity");
const searchBtn = document.querySelector("#searchBtn");
const currentCity = document.querySelector(".currentCity");
const fiveDay = document.querySelector(".fiveDay");

let currentWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow'
    })

    .then((response) => {
        return response.json()
    })

    .then((data) => {
        let getData = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={part}&appid=${weatherAPIKey}&units=imperial`

        fetch(getData)
        .then((response) => {
            return response.json()
    })
}