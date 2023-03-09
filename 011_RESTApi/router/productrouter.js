const express = require("express")
const router = express.Router()
const Product = require("../model/Product")
const auth = require("../middelware/auth")

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


//*************cart******************* */
const Cart = require("../model/Cart")
router.post("/addtocart", auth, async (req, resp) => {

    const user = req.user

    try {
        const cart = new Cart({ uid: user._id, pid: req.body.pid, qty: req.body.qty })
        console.log(cart);
        const cdata = await cart.save()
        resp.send("Product added into cart ...!!!")
    } catch (error) {
        console.log(error);
    }
})

router.get("/viewcart", async (req, resp) => {
    try {
        const cartdata = await Cart.aggregate([{ $lookup: { from: 'users', localField: 'uid', foreignField: '_id', as: 'user' } }, { $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'products' } }]);
        resp.send(cartdata)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/viewmycart", auth, async (req, resp) => {
    try {
        const userdata = req.user;
        const mydata = await Cart.aggregate([{ $match: { uid: userdata._id } }, { $lookup: { from: 'users', localField: 'uid', foreignField: '_id', as: 'user' } }, { $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'products' } }]);

        resp.send(mydata)

    } catch (error) {
        resp.send(error)
    }
})

module.exports = router