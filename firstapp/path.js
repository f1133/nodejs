const { dirname } = require('path');
const path =require('path');

console.log(path.sep);

const filepath =path.join('/content/','test.txt');
console.log(filepath);

const base =path.basename(filepath);
console.log(base);

const abs = path.resolve(__dirname,'content','test.txt');
console.log(abs);