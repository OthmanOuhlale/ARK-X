const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res)=>{
    // res.send('<h1>Home Page</h1>');
    res.render('index');
});

const port = 3000;
app.listen(port, ()=>{
    console.log('server listening on http::/localhost:'+port);
});