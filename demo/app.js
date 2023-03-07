// const bcrypt = require("bcryptjs")


// const mypass = async (pass) => {

//     const bpass = await bcrypt.hash(pass, 10)
//     //console.log(bpass);

//     const valid = await bcrypt.compare("abc", bpass)
//     console.log(valid);
// }

// mypass("topstech")


const jwt = require("jsonwebtoken")

const mytoken = async (id) => {
    try {
        const token = await jwt.sign({ _Id: id }, "thisismyfirstwebtoken")

        const data = await jwt.verify(token, "thisismyfirstwebtoken")
        console.log(data);

    } catch (error) {

    }
}

mytoken("6402b60f509178410030d41b")