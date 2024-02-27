const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const escapeHtml = require('escape-html');
const app = express();
const blogRouter = require('./routes/blogRoutes.js');
const authRoute = require('./routes/authRoutes.js');
const MID = require('./Middlwares/sessionVerification.js');


app.use(express.json());

app.use(cookieParser());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));


app.use('/auth', authRoute);
app.use('/blogs', MID.verifySession, blogRouter);



const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});