const Users= require("./../Models/users");
const passport=require('passport');
const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
    res.render('index', {})
})

router.get('/login', function (req, res) {
    res.render('login', {})
})

router.get('/register', function (req, res) {
    res.render('register', {})
})
module.exports = router;
