const { processFiles } = require('./fileProcessor');

async function main() {
  const filePaths = ['file1.txt', 'file2.txt', 'file3.txt'];
  await processFiles(filePaths);
}

main();
