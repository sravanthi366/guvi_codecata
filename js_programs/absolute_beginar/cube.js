/*You are given with a number "N", find its cube.

Input Description:
A positive integer is provided.

Output Description:
Find the cube of the number.*/

//program starts here

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
var num = userInput;

function cube(num) {
  
    var x=num*num*num;
    
    console.log(x);
}

cube(num);


    
});