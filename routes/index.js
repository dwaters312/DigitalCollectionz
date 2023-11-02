const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('/collection.html', { user: req.user });
    } else {
        res.render('home');
    }
});

module.exports = router;
