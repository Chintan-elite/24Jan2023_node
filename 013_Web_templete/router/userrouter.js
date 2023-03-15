const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
const multer = require("multer")

//************img middelware   *********** */

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

var upload = multer({ storage: storage });


//************img middelware end  *********** */



router.get("/", (req, resp) => {
    resp.render("registration")
})

router.get("/login", (req, resp) => {
    resp.render("login")
})

router.post("/addUser", upload.single("file"), async (req, resp) => {


    try {
        const user = new User({ uname: req.body.uname, email: req.body.email, pass: req.body.pass, img: req.file.filename });
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

        if (userdata.Tokens.length >= 3) {
            resp.render("login", { err: "Max login limit reached !!!!" })
            return;
        }


        const isValid = await bcrypt.compare(userpass, userdata.pass);
        if (isValid) {

            const userdata1 = await User.find()



            const token = await userdata.generateToken();

            resp.cookie("jwt", token)
            resp.render("home", { user: userdata.uname, udata: userdata1 })

        }
        else {
            resp.render("login", { err: "Invalid credentials !!!" })
        }

    } catch (error) {
        resp.render("login", { err: "Invalid credentials !!!" })
    }
})

router.get("/home", auth, async (req, resp) => {

    try {
        const userdata = await User.find()
        resp.render("home", { udata: userdata })
    } catch (error) {

    }
})

router.get("/logout", auth, async (req, resp) => {

    try {


        const user = req.user;
        const token = req.token

        user.Tokens = user.Tokens.filter(e => {
            return e.token != token
        })

        await user.save();
        resp.clearCookie("jwt");
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})

router.get("/logoutall", auth, async (req, resp) => {

    try {


        const user = req.user;
        const token = req.token

        user.Tokens = [];

        await user.save();
        resp.clearCookie("jwt");
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})

module.exports = router