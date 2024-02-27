const fs = require('fs');
const users = require('./users.json');


// Function to generate a random four-digit pin
function generatePin() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Function to generate the next accountID based on the last accountID
function generateNextAccountID(users) {
    if (users.length === 0) {
        // If users array is empty, start with ACC1001
        return "ACC1001";
    } else {
        // Get the last accountID in users array
        const lastAccountID = users[users.length - 1].accountID;
        // Extract the number part and convert it to a number
        const lastNumber = parseInt(lastAccountID.slice(3));
        // Increment the number and concatenate with "ACC"
        return "ACC" + (lastNumber + 1);
    }
}

// Function to add a new user
function addUser(newUser, usersFile = './users.json') {
    let users = require(usersFile);
    newUser.accountID = generateNextAccountID(users);
    newUser.pin = generatePin().toString();
    users.push(newUser);
    fs.writeFile(usersFile, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('User added to users.json file successfully');
    });
}

module.exports = { addUser };
