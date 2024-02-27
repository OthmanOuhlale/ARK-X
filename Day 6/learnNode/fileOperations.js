const { Console } = require('console');
const fs = require('fs');

function writeFileAsync(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject("File not found");
            } else {
                resolve(`File "${filePath}" written successfully.`);
            }
        });
    });
}

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject("File not found");
      } else {
        resolve(console.log(data));
      }
    });
  });
}

function manipulateContent(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err) => {
    if (err) {
      reject("File not found");
    } else {
      resolve(content.toUpperCase());
    }
  });
  });
  // return content.toUpperCase();
}


function getNewFilePath(filePath) {

}


module.exports = { writeFileAsync, readFileAsync, manipulateContent, getNewFilePath };