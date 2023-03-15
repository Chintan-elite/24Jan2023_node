const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    uname: {
        type: String
    },
    email: {
        type: String
    },
    pass: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    },
    img: {
        type: String
    },
    Tokens: [{
        token: {
            type: String
        }
    }]
})

userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("pass")) {
            this.pass = await bcrypt.hash(this.pass, 10)
        }

    } catch (error) {
        console.log(error);
    }
})

userSchema.methods.generateToken = async function (next) {
    try {

        const token = await jwt.sign({ _id: this._id }, process.env.SKEY)

        this.Tokens = await this.Tokens.concat({ token: token })
        await this.save()
        return token;
        next()
    } catch (error) {
        console.log(error);
    }
}



module.exports = new mongoose.model("User", userSchema)