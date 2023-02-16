const geocode = require("./geocode")
const weather = require("./weather")



// geocode.getGeocode("baroda,gujarat").then(data => {
//     console.log(data);
//     return weather.getWeather(data.lat, data.lng)
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

const CurrentWeather = async () => {
    try {
        const data = await geocode.getGeocode("surat,gujarat")
        const result = await weather.getWeather(data.lat, data.lng);
        console.log(data);
        console.log(result);
    } catch (error) {

    }
}


CurrentWeather();