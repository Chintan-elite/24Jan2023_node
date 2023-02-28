const express = require("express")
const router = express.Router()
const User = require("../model/User")

router.get("/users", (req, resp) => {

    User.find().then(data => {
        resp.send(data)
    }).catch(err => {
        console.log(err);
        resp.send(err)
    })

})

router.post("/users", (req, resp) => {
    const user = new User(req.body)
    user.save().then(data => {
        resp.send(data)
    }).catch(err => {
        resp.send(err)
    })
})

router.get("/users/:id", (req, resp) => {

    const _id = req.params.id
    User.findById(_id).then(data => {
        resp.send(data)
    }).catch(err => {
        resp.send(err)
    })
})

router.put("/users/:id", (req, resp) => {
    const _id = req.params.id
    User.findByIdAndUpdate(_id, req.body).then(data => {
        resp.send(data)
    }).catch(err => {
        resp.send(err)
    })
})

router.delete("/users/:id", (req, resp) => {
    const _id = req.params.id
    User.findByIdAndDelete(_id).then(data => {
        resp.send(data)
    }).catch(err => {
        resp.send(err)
    })
})


module.exports = router