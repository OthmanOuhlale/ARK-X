const express = require('express');
const app = express();
app.set('view-engine', 'ejs');
app.use(express.json());
const users = require('./users.json');


app.get('/', (req, res)=>{
    res.render('index.ejs', {name: 'Othman'})
});


// Routes of login
app.get('/login', (req, res)=>{
    res.render('login.ejs');
});

app.post('/login', (req, res)=>{
    const {username, password} = req.body;
});

// Routes of register
app.get('/register', (req, res)=>{
    res.render('register.ejs');
});

app.post('/register', (req, res)=>{
    const {username, password} = req.body;
    const id = users.length + 1;
    const newUser = {id, username, password};
    users.push(newUser);
    console.log(newUser);
    res.render('register.ejs');
    // res.send('user created successfully');
});


const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});