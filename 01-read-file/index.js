const fs = require('fs');
const path = require('path');
const rs = fs.createReadStream(path.join(__dirname,'text.txt'));
let data = ''
rs.on('data', function(txt) {
    data += txt.toString()
    console.log(data);
  });



