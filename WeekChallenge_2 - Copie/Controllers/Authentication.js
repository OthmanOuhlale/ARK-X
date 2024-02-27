const users = require('../users.json');

exports.Authentication = (req, res) => {
    let userName = req.body.username;
    let password = req.body.password;

    if(users.username === userName && users.password === password){
        return res.status(200).send('User authenticated');
    } else{
        return res.status(401).send('Invalid credentials.')
    }
}