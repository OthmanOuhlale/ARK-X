const express = require('express');
const mongoose = require('mongoose');

const mydb = 'mongodb://localhost:27017/mydb'

mongoose
  .connect(mydb)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number},
    createdDate: {type: Date, required: true, default: Date.now()}
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
    name: "John Doe",
    email: "john@doe",
    age: 16
});

// newUser
//   .save()
//   .then((user) => console.log("User created succesfully: ", user))
//   .catch((error) => console.log("Error creating user: ", error));


User.insertMany(newUser)
   .then((user) => console.log("User created succesfully: ", user))
   .catch((error) => console.log("Error creating user: ", error));
   
/*
User.find()
    .then((user) => {
    if(user) console.log("User found: ", user)
    else console.log("No users in the DB")
    })
    .catch((error) => console.log("User Not found: ", error));
*/
/*
User.findOneAndUpdate({email: "john@doe"},{$set: {age: 25}})
    .then((user) =>{
    if(user) console.log("User updated")
    else console.log("User not found")
    })
    .catch((error) => console.log("Error updating user: ", error));
*/
 
// User.deleteOne({name: "John Doe"})
//     .then((user) => {
//         if (user) console.log("User deleted: ", user)
//         else console.log("User not found");
//     })
//     .catch((error) => console.log("Error deleting user: ", error));


const app = express();
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});