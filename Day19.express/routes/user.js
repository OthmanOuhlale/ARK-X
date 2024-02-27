const express = require('express');
const user_router = express.Router();

user_router.get('/', (req, res) =>{
    res.send('Hello Users');
});

user_router.post('/', (req, res) =>{
    res.send('User added successfully');
});

module.exports = user_router;