/*Rahul is given a task to manipulate a string, He hired you as a developer your task is to delete all the repeating characters and print the result left. */

//program starts from here.
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {

string=userInput[0];

function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split('');
  
  
  
  var result = '';
  var ctr = 0;
 
  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;
 
    for (var y = 0; y < arra1.length; y++) 
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }
 
    if (ctr < 2) {
      result+= arra1[x];
    }
  }
  return result;
}

console.log(find_FirstNotRepeatedChar(string));
 
 });
