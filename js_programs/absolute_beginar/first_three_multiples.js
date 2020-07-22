/*Print the First 3 multiples of the given number "N". (N is a positive integer)

Note: print the characters with a single space between them.

Input Description:
A positive integer is provided to you as an input.

Output Description:
Print the First 3 multiples of the number with single spaces between them as an output.*/

// program starts here.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
var num=userInput[0];

        arr = [];
        for (var i = 1; i <= 3; i++) {
            
            x=num*i
            
            arr.push(x);  
            
            //console.log(j)
    }
    console.log(arr.join(" "));
});