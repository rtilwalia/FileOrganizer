//INFO - to add the contents of two file and then store to some other place

let fs = require('fs');
let path = require('path');

//MY WAY
// let content_abc = fs.readFileSync('abc.txt') + "";
// let content_def = fs.readFileSync('def.txt') + "";

// let content_summary = fs.writeFileSync('summary.txt', content_abc + content_def);

// let srcPath = 'D:\\Ritu\\pep_coding\\dev\\file_organizer\\activityOne\\summary.txt';

// let toBeCopiedFileName = path.basename(srcPath);
// let dest = path.join('D:\\Ritu\\pep_coding\\dev\\file_organizer', toBeCopiedFileName);
// console.log(dest);
// fs.copyFileSync(srcPath, dest);

//OTHER WAY
let inputArr = process.argv.slice(2);

let inputDir = inputArr[0];
// console.log(inputDir);
// fs.lstatSync;
let allEntities = fs.readdirSync(inputDir);
console.log(allEntities);

let content = "";

for(let i = 0; i<allEntities.length; i++){
    let entityName = allEntities[i];
    let eName = path.join(inputDir, entityName);
    console.log(eName);
    let stats = fs.lstatSync(eName);
    console.log(stats);
    let isFile = stats.isFile();
    if(isFile){
        let extName = path.extname(eName);
        if(extName == '.txt'){
            content+=fs.readFileSync(eName);
        }
    }
}

//let summaryFile = path.join(process.cwd(), 'summary.txt');
//let summaryFile = 'D:\\Ritu\\pep_coding\\de\file_organizer\\summary.txt'
fs.writeFileSync('D:\\Ritu\\pep_coding\\dev\\file_organizer\\summary.txt', content);
