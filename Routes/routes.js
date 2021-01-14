const Users = require("./../Models/users");
const passport = require('passport');
const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
    res.render('index', {})
})

router.get('/login', function (req, res) {
    res.render('login', {})
})

router.post('/login', function (req, res) {
    res.render('login', {})
})

router.get('/register', function (req, res) {
    res.render('register', {})
})

router.post('/register', function (req, res) {
    Users.register(new Users({username: req.body.username, email: req.body.email}), req.body.password), function (err) {
        console.log('error')
    };
    res.redirect('/login')
})

module.exports = router;
