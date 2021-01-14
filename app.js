var express = require('express');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var mongoose=require ('mongoose');
const port = 3000;
const Users= require("./Models/users");
const passport=require('passport');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.post('/login', passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login' }));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

mongoose.connect('mongodb://localhost:3000/Users', {useNewUrlParser: true});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
