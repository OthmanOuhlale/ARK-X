const express = require('express');
const app = express();
app.use(express.json());
const productRouter = require('./routes/productRoutes.js');

app.use('/', productRouter);

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
