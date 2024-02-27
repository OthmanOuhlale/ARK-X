const users = require('../users.json');


exports.Authentication = (req, res) => {
    let userName = req.body.username;
    let password = req.body.password;

    const user = users.find(user => user.username === userName && user.password === password);

    if(user) {
        // Set session data
        req.session.idUser = user.id;
        console.log(req.sessionID);
        console.log(req.session.idUser);
        console.log('---------------------------');
        res.status(200).send('User authenticated');
    } else {
        res.status(401).send('Invalid credentials');
    }
};



















// const users = require('../users.json');

// exports.Authentication = (req, res) => {
//     let userName = req.body.username;
//     let password = req.body.password;

//     if(users.username === userName && users.password === password){
//         return res.status(200).send('User authenticated');
//     } else{
//         return res.status(401).send('Invalid credentials');
//     }
// }