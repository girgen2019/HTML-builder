const prom = require('fs/promises');
const path = require('path');
const { stdout} = process;
const directFile = path.join(__dirname, 'secret-folder');

async function readFolderFiles () {
const readdir = await prom.readdir(directFile, {recursive: true, force: true, withFileTypes: true});
for(let file of readdir){
    if(file.isFile()){
        const directName = path.extname(file.name);
        const pathFile = path.join(directFile, file.name);
        const dirName = path.parse(file.name).name;
        const sizeFile = await prom.stat(pathFile)
        stdout.write(`${directName.slice(1)} - ${dirName} - ${sizeFile.size} b\n`)
    }
}
}
readFolderFiles ()

