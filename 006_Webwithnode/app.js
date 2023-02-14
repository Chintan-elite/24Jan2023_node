const express = require("express")
const app = express();
const port = 9000;
const path = require("path")

app.get("/", (req, resp) => {
    resp.send("main req. calling....")
})

app.get("/home", (req, resp) => {
    // resp.send("home page")
    resp.sendFile(path.join(__dirname, "home.html"))
})

app.get("/about", (req, resp) => {
    resp.send("about calling")
})

app.get("*", (req, resp) => {
    resp.send("404 : Page not found")
})

app.listen(port, () => {
    console.log("Server running on port : " + port);
})


