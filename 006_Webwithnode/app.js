const express = require("express")
const app = express();
const port = 9000;
const path = require("path")



app.get("/", (req, resp) => {
    // resp.send("home page")
    resp.sendFile(path.join(__dirname, "home.html"))
})

app.get("/about", (req, resp) => {
    resp.sendFile(path.join(__dirname, "about.html"))
})
app.get("/contact", (req, resp) => {
    resp.sendFile(path.join(__dirname, "contact.html"))
})

app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "err.html"))
})

app.listen(port, () => {
    console.log("Server running on port : " + port);
})


