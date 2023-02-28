const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    pname: {
        type: String
    },
    price: {
        type: Number
    },
    qty: {
        type: Number
    }
})

module.exports = new mongoose.model("Product", productSchema)