let fs = require('fs');
let path = require('path');

let content = fs.readFileSync('f1.txt');

//to print buffer version of the file
//console.log(content);

//to print file using buffer because buffer is faster
//buffer is fast because comoputer reads hexadecimal and binary more faster than human language
//utf-8 also use buffer internally
//console.log(content + "");

//to write in the file
//it overrides the content of the file
fs.writeFileSync('abc.txt', 'Its almost end of august');

//to append contents at the end of the file
fs.appendFileSync('abc.txt', 'Hakunama tata');

//to delete a file using file system
fs.unlinkSync('abc.txt');


//FOLDERS
//to create folder/directories
//fs.mkdirSync('pathModule');

//to delete a folder
//fs.rmdirSync('pathModule');

//to check if file exists or not
// let doesExist = fs.existsSync('fs.js');
// console.log('fs.js file', doesExist);

//returns the statusObj of file/folder
// let statusObj = fs.lstatSync('f1.txt');
// console.log(statusObj);


//path is a type of string and we don't know about the type of file
//it is referring to
//for this we have to check for file and directory

// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

//it will read and print the files inside a directory
//tells about the hierarchy of the files
// let path = 'D:\\Ritu\\pep_coding\\dev\\file_organizer\\dir';
// let fileArr = fs.readdirSync(path);
// console.log(fileArr);

//copy file sync
//parameters for coopy file sync
let srcPath = 'D:\\Ritu\\pep_coding\\dev\\file_organizer\\fsModule\\f1.txt';
let destPath = 'D:\\Ritu\\pep_coding\\dev\\file_organizer\\fsModule\\f2.txt';
//third parameter = mode
//https://www.geeksforgeeks.org/node-js-fs-copyfilesync-function/


//to copy f1.txt into dir folder
let toBeCopiedFileName = path.basename(srcPath);
let dest = path.join('D:\\Ritu\\pep_coding\\dev\\file_organizer\\dir', toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcPath, dest);

//when not to override the content of the file 