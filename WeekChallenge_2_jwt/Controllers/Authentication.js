const users = require('../users.json');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.Authentication = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    const userToken = jwt.sign(user, process.env.TOKEN_SECRET);
    // console.log(userToken);
    if (!user) {
        res.send('User not found.');
    }
    if (user.password !== password) {
        res.send('Authentication failed. Wrong password.');
    }
    res.json({ message: 'Authentication successful.', user , userToken});
};

exports.getUsers = (req, res) => {
    res.status(200).send(users);
}