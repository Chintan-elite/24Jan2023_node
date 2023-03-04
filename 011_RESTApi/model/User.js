const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String
    },
    age: {
        type: Number
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

userSchema.pre("save", async function () {
    try {
        if (this.isModified = "pass") {
            this.pass = await bcrypt.hash(this.pass, 10)
        }
    } catch (error) {

    }
})



const User = new mongoose.model("User", userSchema)

module.exports = User