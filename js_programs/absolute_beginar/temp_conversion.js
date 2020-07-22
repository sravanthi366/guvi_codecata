/*You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit. 

Note: In case of decimal values, round-off to two decimal places.

Input Description:
A number is provided in Celcius as the input of the program.

Output Description:
The output shall be the temperature converted into Fahrenheit corresponding to the input value print up to two decimal places and round off if required.*/

//program starts from here

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
var data = userInput;

function convertToF(celsius) {
    let x =celsius * 1.8 + 32;
    if(x - Math.floor(x) !==0){
      var a=x.toFixed(2);
      console.log(a);
      exit();
}
console.log(x);
}

convertToF(data);


    
});