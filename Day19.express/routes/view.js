const express = require('express');
const user_router = require('./user.js');

const app = express();

app.use('/users', user_router);


app.listen(3000, () => {console.log('server running')});