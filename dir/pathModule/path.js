//path module is used for changing/joinng/extension/base_name of path of the files

let path = require('path');
let fs = require('fs');

let inputArr = process.argv.slice(2);
console.log(inputArr);

// let fileName = inputArr[0];
// let content = inputArr[1];

// console.log('fileName', fileName);
// console.log('content', content);

//cwd-> current working directory

let currentPath = process.cwd();
console.log(currentPath);


//to join two different paths
//its appending the string usng slash and creates a path
//it is not a permanent funtion, it will print the path but not create it
//like an imaginary string
let joinedPath = path.join(currentPath, 'abc', 'def.txt');
console.log(joinedPath);

//to know the basename of a file
//such path related functions are used to know the where we are 
let file = path.basename('D:\\Ritu\\pep_coding\\dev\\file_organizer\\dir\\pathModule\\path.js');
console.log(file);

//to know the extension name of the file
let extName = path.extname('D:\Ritu\pep_coding\dev\file_organizer\dir\pathModule\path.js');
console.log(extName);