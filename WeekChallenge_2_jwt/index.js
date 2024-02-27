const express = require('express');
const app = express();
const authRoute = require('./routes/authRoutes.js');
const blogRouter = require('./routes/blogRoutes.js');
const { verifyToken } = require('./Middlwares/verifToken.js')
app.use(express.json());


app.use('/auth', authRoute);
app.use('/blogs', verifyToken, blogRouter);


const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});