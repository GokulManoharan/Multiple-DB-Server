const express = require ('express')
const router = express.Router()
const {User} = require ('../models/User')

router.post('/', (req,res) => {
    const user = new User(req.body)
    User.connectToDbAndSave(user.username)
    user.save()
        .then((user) => {
            res.send(user)
        })
        .catch((err) => res.send(err))
})


module.exports = {
    usersRouter : router
}