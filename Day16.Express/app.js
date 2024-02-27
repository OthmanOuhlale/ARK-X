const express = require('express');

const app = express();

const users = [];

app.get('/', (req, res)=>{
    res.write("<h1>Welcome Users</h1>");
});


app.get('/users', (req, res)=>{
    if (users.length === 0) {
        res.status(404).send('No users found');
    };
    res.send("<h1Welcome to my Express.js server!</h1>");
});


app.post('/users', (req, res)=>{
    res.write("<h1>created</h1>");
});

app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000");
});