const { readFileAsync, writeFileAsync, manipulateContent, getNewFilePath } = require('./fileOperations');


function processFiles(filePaths) {
  for (const filePath of filePaths) {
    try {
      writeFileAsync('test.txt', 'HELLO');
      const content = readFileAsync(filePath);
      const modifiedContent = manipulateContent(content);
      const newFilePath = getNewFilePath(filePath);
      console.log(`File processed: ${filePath} => ${newFilePath}`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { processFiles };