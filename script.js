const url = 'https://api.openweathermap.org/data/2.5/';
const key = '4015c568f10222e9c03193389e8a6c4d';

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}
const searcBar = document.getElementById('searchBar')
searcBar.addEventListener('keypress', setQuery)

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)

    searchBar.value = null;
}


const displayResult = (result) => {
    let city = document.querySelector('.city')
    let temp = document.querySelector('.temp')
    let desc = document.querySelector('.desc')
    let minmax = document.querySelector('.minmax')

    if (!result || result.cod === '404') {
        city.innerText = `Şehir Bulunamadı`
        temp.innerText = ''
        desc.innerText = ''
        minmax.innerText = ''
    }

    city.innerText = `${result.name}, ${result.sys.country}`


    temp.innerText = `${Math.round(result.main.temp)}°C`


    desc.innerText = result.weather[0].description


    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C `
}


