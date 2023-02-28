const express = require("express")
const app = express();
const PORT = 9000;
const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
app.use(express.json())
const dburl = "mongodb+srv://tops:tops@cluster0.md7ropa.mongodb.net/myapi?retryWrites=true&w=majority"
mongoose.connect(dburl).then(() => {
    console.log("db connected");
}).catch(err => {
    console.log(err);
})

const userrouter = require("./router/userrouter")
const productroutr = require("./router/productrouter")
app.use("/", userrouter)
app.use("/", productroutr)


app.listen(PORT, () => {
    console.log("server running on port : " + PORT);
})