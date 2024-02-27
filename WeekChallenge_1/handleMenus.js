const fs = require('fs');
const readline = require('readline');
const users = require('./users.json');
const { addUser } = require('./AddUsers.js');
const { Authentication } = require('./Authentication.js');


const rl = readline.createInterface({input: process.stdin, output: process.stdout});

function displayMenu() {
    console.log("1. Add user");
    console.log("2. authentication ");
    console.log("3. Exit");
  
    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                addUser();
                break;
            case "2":
                Authentication();
                break;
            case "3":
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.\n");
                displayMenu();
        };
    });
};

function handleOptions(){
    console.log("1. check balance");
    console.log("2. Depositing Money");
    console.log("3. Withdrawing Money");
    console.log("4. View Transaction History");
    console.log("5. Exit");
    rl.question('Enter your choice: ', (operation)=>{
        switch(operation) {
            case '1' :
                readBalance();
                break;
            case '2' :
                break;
            case '3' :
                break;
            case '3' :
                break;
            default : 
                console.log('Invalid operation');
                handleOptions();
        };
    });
};

module.exports = { displayMenu, handleOptions };