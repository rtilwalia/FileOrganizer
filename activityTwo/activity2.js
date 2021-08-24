let fs = require('fs');
let path = require('path');

let inputArr = process.argv.slice(2);
let mainDir = inputArr[0]; //WebD
let subDir = inputArr.slice(1) //javascript React MongoDB

console.log(mainDir);
console.log(subDir);


let mainDirPath = path.join(process.cwd(), mainDir);

//to create the directory if it does not exists
if(!fs.existsSync(mainDirPath)){
    fs.mkdirSync(mainDirPath);
}

//lopping through the sub directories
for(let i = 0; i<subDir.length; i++){
    console.log(subDir[i]);
    let folder = path.join(mainDirPath, subDir[i]);

    console.log('folderpath',folder);

    //to create the Module folder if it doesn't exists
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }

    //looping through the modules
    for(let j = 1; j<=3; j++){
        let module = path.join(folder, `Module${j}`);

        if(!fs.mkdirSync(module)){
            fs.mkdirSync(module);
        }
        
        console.log(module);

        let fileName = path.join(module, 'content.md');
        fs.writeFileSync(fileName, '#Hello Everyone');
    }
}



// let content = '#HelloEveryone';

// for(let i of inputDir){
//     for(let j = 1; j <=3; j++){
//         files = fs.mkdirSync('Module' + 'j');
//     }

//     for(let k of files){
//         fs.writeFileSync('D:\\Ritu\\pep_coding\\dev\\file_organizer\\activityTwo\\WebD\\i\\k\\content.md', content);
//     }
    
// }



