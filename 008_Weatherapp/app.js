const express = require("express")
const app = express();
const weather = require("./utill/weather")
const geocode = require("./utill/geocode")
const hbs = require("hbs")
const path = require("path")
const PORT = 9000;

const viewpath = path.join(__dirname, "./templetes/view")
const partialpath = path.join(__dirname, "./templetes/partials")
const publicpath = path.join(__dirname, "./public")

app.set("view engine", "hbs")
app.set("views", viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(publicpath))

app.get("/", (req, resp) => {
    resp.render("index", { user: "vivek" })
})

app.get("/myweather", (req, resp) => {
    resp.render("weather")
})

app.get("/about", (req, resp) => {
    resp.render("about")
})

app.get("/weather", (req, resp) => {

    const location = req.query.location
    geocode.getGeocode(location).then(result => {
        return weather.getWeather(result.lat, result.lng)
    }).then(data => {
        resp.send(data)
    }).catch(err => {
        console.log(err);
    })

})



app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
})