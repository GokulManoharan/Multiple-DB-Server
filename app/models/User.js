const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type : String,
        required : true,
        unique : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    }})
    
    userSchema.statics.connectToDbAndSave = function(username){
        return mongoose.connect(`mongodb://localhost:27017/multi-db-${username}`, { useNewUrlParser: true, useCreateIndex: true})
        .then(function () {
            console.log('connected to db')
        })
        .catch(function (err) {
            console.log('error connecting to db',err)
        })
    }

const User = mongoose.model('User', userSchema)

module.exports = {
       User
   }