const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
router.get("/", (req, resp) => {
    resp.render("registration")
})

router.get("/login", (req, resp) => {
    resp.render("login")
})

router.post("/addUser", async (req, resp) => {
    try {
        const user = new User(req.body);
        const data = await user.save();
        resp.render("registration", { msg: "Registration success !!!!" })
    } catch (error) {

    }
})

router.post("/userLogin", async (req, resp) => {
    try {

        const useremail = req.body.email
        const userpass = req.body.pass

        const userdata = await User.findOne({ email: useremail });
        const isValid = await bcrypt.compare(userpass, userdata.pass);
        if (isValid) {

            const token = await jwt.sign({ _id: userdata._id }, process.env.SKEY)
            resp.cookie("jwt", token)
            resp.render("home", { user: userdata.uname })

        }
        else {
            resp.render("login", { err: "Invalid credentials !!!" })
        }

    } catch (error) {
        resp.render("login", { err: "Invalid credentials !!!" })
    }
})

router.get("/home", auth, (req, resp) => {
    resp.render("home")
})

router.get("/logout", (req, resp) => {

    resp.clearCookie("jwt");
    resp.render("login")
})

module.exports = router