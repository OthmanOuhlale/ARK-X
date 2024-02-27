const fs = require('fs');
const readline = require('readline');
const users = require('./users.json');
const { addUser } = require('./AddUsers.js');
const { Authentication } = require('./Authentication.js');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});


function readBalance(user){
    console.log(user.balance);
    // fs.readFile('users.json', 'utf8', (err, data) => {
    //     if(err){
    //         console.log(err);
    //         return;
    //     }else{
    //         const user = JSON.parse(data);
    //         console.log(user[1].name);
    //     };
    // });
};