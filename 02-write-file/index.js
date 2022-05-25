const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'output.txt'));
const { stdout, stdin } = process;


stdout.write('Enter your text: ')

stdin.on('data', data => { 
    if(data.toString().trim() === 'exit'){
        stdout.write('See you later!');
        process.exit()
    } else output.write(`${data.toString()}`)  
})
process.on('SIGINT', () => {
    stdout.write('See you later!'); 
    process.exit();
  });