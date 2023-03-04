const bcrypt = require("bcryptjs")


const mypass = async (pass) => {

    const bpass = await bcrypt.hash(pass, 10)
    //console.log(bpass);

    const valid = await bcrypt.compare("abc", bpass)
    console.log(valid);
}

mypass("topstech")