const express = require('express');
const app = express();
const blogRouter = require('./routes/blogRoutes.js');

app.use(express.json());


app.use('/blogs', blogRouter);

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});