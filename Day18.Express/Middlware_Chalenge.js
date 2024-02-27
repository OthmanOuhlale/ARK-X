const express = require('express');
const { loggingMiddleware } = require('./middlwares.js');
const router = express.Router();

const app = express();

// Logging middleware
// app.use(loggingMiddleware);

app.get('/products',loggingMiddleware, (req, res, next) => {
    res.send('This is the product route!');
    next()
});

app.get('/users', (req, res) => {
    res.send('This is the product route!');
});
// Error handling middleware
// app.use((err, res) => {
//     console.error(err);
//     res.status(500).send('Something broke!');
// });

// Handling non-existent routes

app.use((req, res) => {
    res.status(404).send('Sorry, can\'t find that!');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
