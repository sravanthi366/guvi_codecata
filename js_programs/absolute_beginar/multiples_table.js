/*Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)

9 18 27...

Print NULL if 0 is input

Input Description:
A positive integer is provided as an input.

Output Description:
Print the table of nine with single space between the elements till the number that is input.*/

//program starts here.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
var n = 9
var num=userInput[0];

        arr = [];
        for (var i = 1; i <= num; i++) {
            
            x=n*i
            
            arr.push(x);  
            
            //console.log(j)
    }
    console.log(arr.join(" "));
});