const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Root Route

router.get('/', (req, res) => {
    User.find((err, users) => {
        if (err) {
            console.log('An error has occured!');
        } else {
            res.json(users);
        }
    });
});

// SignUp Route

router.get('/signup', (req, res) => {
    res.send('SignUp Page');
});

// Login Route

router.get('/login', (req, res) => {
    res.send('Login Page');
});

// Info Route

router.get('/info', (req, res) => {
    res.send('Info Page');
});

// Profile Route

router.get('/profile', (req, res) => {
    res.send('Profile Page');
});

module.exports = router;