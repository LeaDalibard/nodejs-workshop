var express = require('express');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var app = express();
var mongoose=require ('mongoose');
const port = 3000;

const Users= require("./Models/users");

const passport=require('passport');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.post('/login', passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login' }));

mongoose.connect('mongodb://localhost:3000/Users', {useNewUrlParser: true});
Users.findOne(function(error, result) { /* ... */ });


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
