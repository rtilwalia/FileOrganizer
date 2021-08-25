//folderpath-> traverse the file/folder then print them

let fs = require('fs');
let path = require('path');

function treeFn(srcpath){
    let baseName = path.basename(srcpath)
    console.log(baseName);
    console.log("├──")
    let content = fs.readFileSync(srcpath);
    console.log(content);

    let allEntities = "";
    for(let i = 0; i < content.length; i++){
        allEntities += '\n\t' + "├──" + content[i];
        console.log(content[i]);
    }
}


module.exports = {
    treeFn : treeFn
}