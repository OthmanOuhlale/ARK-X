const express = require('express');
const {Authentication} = require('../Controllers/Authentication.js');

const authRoute = express.Router();


authRoute.post('/', Authentication);
// authRoute.get('/', verifyToken, getUsers);


module.exports = authRoute;