const readline = require('readline');

const rlContact = readline.createInterface({input: process.stdin, output: process.stdout});

let contacts = [];

function addContact() {
    rlContact.question('What is your name?', (name) => {
        rlContact.question('your phone number?', (phone) => {
            contacts.push({name, phone});
            console.log('Contact added successfully!');
            rlContact.question('Choose an action (add, view, search, exit): ', (action) => {
                handleAction(action);
            });
        });
    });
}

function viewContacts() {
    if (contacts.length === 0) {
        console.log('No contacts found!');
    } else {
        contacts.forEach(contact =>{ 
            console.log(`Name: ${contact.name}, Phone: ${contact.phone}`) 
        });
    }
    rlContact.question('Choose an action (add, view, search, exit): ', (action) => {
        handleAction(action);
    });
}

function searchContacts() {
    rlContact.question('enter name of contact: ', (searchName) => {
        // const foundContact = contacts.filter(c => c.name === searchName);
        const foundContact = contacts.find(contact => contact.name.toLowerCase() === searchName.toLowerCase());
        if (foundContact) {
            console.log(`Name: ${foundContact.name}, Phone Number: ${foundContact.phone}`);
        } else {
            console.log('Contact not found.');
        }
        rlContact.question('Choose an action (add, view, search, exit): ', (action) => {
            handleAction(action);
        });
    });
}

function handleAction(action) {
    switch (action.toLowerCase()) {
        case 'add' :
            addContact();
            break;
        case 'view' :
            viewContacts();
            break;
        case 'search' :
            searchContacts();
            break;
        case 'exit' :
            console.log('Exiting...');
            rlContact.close();
            break;
        default:
            console.log('Invalid action.');
            rlContact.question('Choose an action (add, view, search, exit): ', (action) => {
                handleAction(action);
            });
            break;
    }
}

handleAction('add');