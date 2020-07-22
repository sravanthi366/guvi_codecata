/*You are given a string.Your task is to print only the consonants present in the string without affecting the sentence spacings if present. If no consonants are present print -1 */
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
    
    var input=userInput[0];
    var result = "";
    
    function isVowel(c) {
     return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
    }

    
    for (var i = 0; i < input.length; i++) {
        
         if (!isVowel(input.charAt(i))) {
             
             result = result.concat(input.charAt(i) + "");
         }
     }
    
   console.log(result)
    
    
});