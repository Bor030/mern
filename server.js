const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const UserModel = require('./models/Users')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://'+process.env.NAME+':'+process.env.PASSWORD+'@cluster0.ta9wa.mongodb.net/database?retryWrites=true&w=majority')


app.post("/create/", (req, res) => {

    UserModel.create(req.body).then(kontakti => res.json(kontakti))
    .catch(err => res.json(err))
})

app.get('/users/', (req, res) => {

    UserModel.find({}).then(kontakti => res.json(kontakti))
})

app.get('/getUser/:id', (req,res) => {

    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(kontakti => res.json(kontakti))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {

    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email, position: req.body.position})
    .then(kontakti => res.json(kontakti))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req,res) => {
    
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
}) 

app.listen(5000, () => (console.log('server radi')))