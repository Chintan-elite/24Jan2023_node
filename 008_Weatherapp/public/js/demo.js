



var headers = new Headers();
headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

const getCountries = () => {
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
        .then((response) => {
            return response.json()
        })
        .then((result) => {

            var row = "";
            for (var i = 0; i < result.length; i++) {


                row = row + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
            }
            country.innerHTML = row
        })
        .catch(error => console.log('error', error));
}

var countrycode;
const getState = (ccode) => {
    countrycode = ccode;
    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions)
        .then((response) => {
            return response.json()
        })
        .then((result) => {

            var row = "";
            for (var i = 0; i < result.length; i++) {

                row = row + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
            }
            state.innerHTML = row
        })
        .catch(error => console.log('error', error));
}

var statecode;
const getcities = (scode) => {
    statecode = scode
    fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions)
        .then((response) => {
            return response.json()
        })
        .then((result) => {

            var row = "";
            for (var i = 0; i < result.length; i++) {

                row = row + "<option value=" + result[i].name + ">" + result[i].name + "</option>"
            }
            city1.innerHTML = row
        })
        .catch(error => console.log('error', error));
}


const getWeather = (name) => {


    const location = name + "," + statecode + "," + countrycode


    fetch(`/weather?location=${location}`).then(result => {
        return result.json()
    }).then(data => {

        city.innerHTML = data.city
        temp.innerHTML = data.temp
        pressure.innerHTML = data.pressure
        humidity.innerHTML = data.humidity
        lat.innerHTML = data.lat
        lng.innerHTML = data.lon


    }).catch(err => {
        console.log(err);
    })


}