const express = require("express")
const router = express.Router()
const Product = require("../model/Product")


router.get("/products", async (req, resp) => {
    try {
        const data = await Product.find();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


router.post("/products", async (req, resp) => {
    try {
        const pro = new Product(req.body)
        const data = await pro.save();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/products/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const data = await Product.findById(_id);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


router.put("/products/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const data = await Product.findByIdAndUpdate(_id, req.body);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


router.delete("/products/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const data = await Product.findByIdAndDelete(_id);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

module.exports = router