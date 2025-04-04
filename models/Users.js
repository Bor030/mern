const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name:String,
    email:String,
    position:String
}, {collection:'kontakti'})



const UserModel = mongoose.model('kontakti', UserSchema)

module.exports = UserModel