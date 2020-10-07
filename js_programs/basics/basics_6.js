/* Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.
Sample Testcase :
INPUT
9 2
OUTPUT
odd */

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", data => {
    
let num = userInput[0].split(" ");
let num1 = +num[0];
let num2 = +num[1];
let sum = num1 + num2;
if(sum%2==0)
console.log("even");
else
console.log("odd");
   
});