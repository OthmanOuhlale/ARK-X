const readline = require('readline');
const users = require('./users.json');
const { handleOptions } = require('./handleMenus.js');

const authentication = readline.createInterface({input: process.stdin, output: process.stdout});

function Authentication() {
    authentication.question('Enter your AccountID: ', (accountId) =>{
        authentication.question('Enter your PIN: ', (PIN) =>{
            const user = users.find(user => user.accountID === accountId && user.pin === PIN);
            if( user ){
                console.log('User authenticated successfully');
                handleOptions();
            }else {
                console.log('User authentication failed')
            };
            authentication.close();
        });
    });
};

module.exports = { Authentication };