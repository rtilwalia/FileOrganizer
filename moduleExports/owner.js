let str = 'Hakuna Matata'
let a = 10;
function foo(msg){
    return 'Hi! I was made in owner.js ' + msg;
};
// console.log(module);
// module.exports = foo;

//to add multiple variables
//then module will be created as an object

//This line is not exported but is still printed in the output
console.log('Hola! I was made in owner.js.');
//whenever we export from owner file, the content of the file is first run in the complier
//but the rest of the var or function is not going to print anything because these should be called or console.log
//then only they can be printed through client.js because they are called from client file
module.exports={
    var:a,
    string:str,
    fooFnc: foo
};


