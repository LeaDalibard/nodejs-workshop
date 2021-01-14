var express = require('express')
var bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
var app = express()
var mongoose=require ('mongoose')
const port = 3000
const Users= require("./Models/users")

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

mongoose.connect('mongodb://localhost:3000/users', {useNewUrlParser: true});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
