const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
    // const head = req.headers['authorization'];
    // console.log(req.headers['authorization']);
    const head = req.headers['authorization'];
    if (!head) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    const token = head.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data)=>{
        if(err){
            res.json({error: 'Invalid token'});
        } else {
            // res.send(data);
            next();
        }
    });
    res.send('User not Authenticated');
};