const jwt = require("jsonwebtoken")
const User = require("../model/users")

const auth = async (req, resp, next) => {
    const token = req.cookies.jwt

    try {
        const data = await jwt.verify(token, process.env.SKEY)
        if (data) {
            const userdata = await User.findOne({ _id: data._id })

            const myt = userdata.Tokens.find(e => {
                return e.token == token
            })

            if (myt == undefined) {
                resp.render("login", { err: "Please login first!!!" })
            } else {
                req.user = userdata;
                req.token = token
                next();
            }


        }
        else {
            resp.render("login", { err: "Please login first!!!" })
        }
    } catch (error) {
        resp.render("login", { err: "Please login first!!!" })
    }

}

module.exports = auth