//Filetest from Nodejs documentation

//const data = new Uint8Array(Buffer.from('filetest.js'));
const fs = require('fs');

fs.writeFile('message.txt', 'data', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});