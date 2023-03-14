const express = require("express")
const app = express();
const mongoose = require("mongoose")
const path = require("path")
const hbs = require("hbs")
require("dotenv").config()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3000
const DBURL = process.env.DBURL
mongoose.connect(DBURL).then(() => {
    console.log("DB connected");
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
const publicpath = path.join(__dirname, "../public")
const viewpath = path.join(__dirname, "../templetes/views")
const partialpath = path.join(__dirname, "../templetes/partials")

app.set("view engine", "hbs")
app.set("views", viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(publicpath))

app.use("/", require("../router/userrouter"))



app.listen(PORT, (req, resp) => {
    console.log("server running on port : " + PORT);
})
