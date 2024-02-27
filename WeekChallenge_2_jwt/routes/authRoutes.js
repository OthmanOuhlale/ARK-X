const express = require('express');
const {Authentication, verifyToken, getUsers} = require('../Controllers/Authentication.js');
// const { verifyToken } = require('../Middlwares/verifToken.js');
const authRoute = express.Router();

authRoute.post('/', Authentication);
// authRoute.get('/', verifyToken, getUsers);


module.exports = authRoute;