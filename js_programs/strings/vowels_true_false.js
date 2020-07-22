/*Given a string S, print 'yes' if it has a vowel in it else print 'no'.
Sample Testcase :
INPUT
codekata
OUTPUT
yes */

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
    
    var input=userInput[0];
    var result = 0;
    
    function isVowel(c) {
     return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
    }

    
    for (var i = 0; i < input.length; i++) {
        
         if (isVowel(input.charAt(i))) {
             
             result = 1;
         }
         
     }
    
   if(result!=0){
       console.log('yes')
   }else{
       console.log('no')
   }
    
    
});