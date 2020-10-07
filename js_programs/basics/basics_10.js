/* Write a program to print the sum of the first K natural numbers.
Input Size : n <= 100000
Sample Testcase :
INPUT
3
OUTPUT
6 */

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", data => {
    
let num = userInput;
let num1= +num;
 var sum =0;
 for (let i=0; i<=num1; i++){
   
    sum+=i;
    
}
console.log(sum);
   
});