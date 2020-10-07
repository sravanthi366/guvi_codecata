
/* Find the minimum among 10 numbers.
Sample Testcase :
INPUT
5 4 3 2 1 7 6 10 8 9
OUTPUT
1 */



const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
userInput=[];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", (data) => {
  let inp = userInput[0].split(' ').map(x=>+x);
  let res = Math.min(...inp);
   console.log(res);
   
});