const express = require('express');
const { MongoClient } = require("mongodb");

const app = express();
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
client
    .connect()
    .then(() => console.log("Connected to the database"))
    .catch((error) => console.log("Error: ", error));

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const db = client.db('mydb');
const collection = db.collection('users');

collection
    .insertMany(users)
    .then(() => console.log("User Created Successfully"))
    .catch((error) => console.log("Error: ", error));

collection.find().toArray()
    .then(users => {
        console.log('Users:');
        users.forEach(user => {
            console.log(user);
        })
        })
    .catch((error) => console.log("Error: ", error));

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});