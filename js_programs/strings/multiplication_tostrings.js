/*You are given two numbers. Your task is to multiply the two numbers and print the answer.

Input Description:
You are given two numbers ‘n’ and ‘m’.

Output Description:
Print the multiplied answer

Sample Input :
99999 99998
Sample Output :
9999700002*/

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
    
    var s= userInput[0].split(" ");
    var str1 = s[0];
    var str2=s [1];
    var mul = parseInt(str1)*parseInt(str2);
    
    console.log(mul);
    
    
});


