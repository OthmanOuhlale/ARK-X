const os = require('os');

console.log('CPU Cores:', os.cpus().length);
console.log('CPU Model:', os.cpus()[0].model);


const fs = require('fs');

// Create folder :
if (!fs.existsSync('Assets')){
    fs.mkdir('Assets', (err) => {
        if(err) console.log(err);
        else console.log('Folder Created successfully');
    })
}

// Delete folder :
if (fs.existsSync('Assets')){
    fs.rmdir('Assets', (err) => {
        if(err) console.log(err);
        else console.log('Folder deleted successfully');
    })
}

// Create file and the writing in it :
const writeFile = new Promise((resolve, reject) => {
    fs.writeFile('example.txt', 'Hello, Node.js!', 'utf8', (err) => {
        if (err) reject(console.error(err));
        else resolve(console.log('File has been written.'));
    });
});

// Read content of file : 
const readFile = new Promise((resolve, reject)=> {
    fs.readFile('example.txt', 'utf8', (err, data)=>{
        if(err) reject(console.log(err));
        else resolve(console.log(data));
    })
})

// delete file :
// if (fs.existsSync('example.txt')){
//     fs.unlink('example.txt', (err)=> {
//         if(err) console.log(err);
//         else console.log('file deleted successfully');
//     })
// }









// console.log(global);

// global.setTimeout(()=>{console.log("dkclkdj")}, 3000);

// let a = 0;
// let int = setInterval(()=>{console.log(a = a + 1);}, 1000);