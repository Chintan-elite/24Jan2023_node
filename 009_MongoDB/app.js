const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const DB_URL = "mongodb://127.0.0.1:27017";
const database = "24jan"

MongoClient.connect(DB_URL).then(result => {
    console.log("db connected");

    const mydb = result.db(database)

    // mydb.createCollection("emp").then(data => {
    //     console.log("collection created");
    // })

    mydb.collection("emp").insertOne({
        name: "Rutvik",
        email: "rutvik@gmail.com"
    }).then(result => {
        console.log("data inserted");
    }).catch(err => {
        console.log(err);
    })


}).catch(err => {
    console.log(err);
})

