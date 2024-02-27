async function fetchUserData() {
    try {
        let response = await fetch('https://dummyjson.com/users');
        let data = await response.json();
        processUserData(data.users);
    } catch (err) {
        console.log(err);
    }
}

fetchUserData();

const processUserData = (users) => {
    // afichhe name and age of all users:
    users.map(u => console.log(`Name: ${u.firstName} ${u.lastName}, Age: ${u.age}`));

    console.log("----------------");
    // filter users by gender:
    let filteredUsers;
    filteredUsers = users.filter(user => user.gender === 'male');
    console.log(filteredUsers);

    console.log("----------------");
    // affiche total age of all the male users:
    let totalAge = summarizeAge(filteredUsers);
    console.log(`Total Age of Male users: ${totalAge}`);
}

const summarizeAge = (users) => {
    // calculate total age Male users:
    return users.reduce((sumAge, user) => sumAge + user.age, 0);
}




// async function fetchUserData(){
//     let users = await fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
    
//     processUserData(users);
// }
// console.log(fetchUserData());

// const processUserData = (users) => {
//     users.map(u => console.log(`Name: ${u.name}`));
// }

// const filteredUsers = users.filter(user => user.gender === 'male');