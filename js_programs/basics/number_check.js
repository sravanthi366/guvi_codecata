/*Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
Sample Testcase :
INPUT
3
2 6
OUTPUT
yes*/

// program starts from here.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {



var data = userInput[0];

var n=userInput[1].split(" ");
var l=n[0];
var r=n[1];

console.log(data);

console.log(n);
console.log(l);
console.log(r);
//rint 'yes' if N is between L and R else print 'no'.

if(l<data && data<r){
    console.log("yes");
}else{
    console.log("no");
}


});