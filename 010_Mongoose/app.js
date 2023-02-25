const mongoose = require("mongoose")

const dburl = "mongodb://127.0.0.1:27017/24jan";

mongoose.set('strictQuery', true)
mongoose.connect(dburl).then(() => {
    console.log("db conencted");
}).catch(err => {
    console.log(err);
})

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

const User = new mongoose.model("User", userSchema)


const addUser = () => {

    const user = new User({ email: "rutvik@gmail.com", pass: "test123", age: 65 });
    user.save().then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })

}

const addmanyUser = () => {

    const user1 = new User({ uname: "jay", email: "jay@gmail.com", pass: "test123", age: 25 })
    const user2 = new User({ uname: "jaydeep", email: "jayeddep@gmail.com", pass: "test123", age: 24 })
    const user3 = new User({ uname: "sanket", email: "sanket@gmail.com", pass: "test123", age: 27 })

    User.insertMany([user1, user2, user3]).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })


}

const viewUser = () => {

    User.find({ uname: 'sanket' }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })

}

const updatedata = () => {

    User.updateOne({ uname: "sanket" }, { pass: "demo123" }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })

}



//addUser();
//addmanyUser();
//viewUser();
updatedata()