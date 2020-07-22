/* Jennyfer is fond of strings. She wants to read the character from right to left (reverse the string), so she wants you to design a suitable algorithm which satisfy her desire.

 */
//pragram starts from here.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
    
    var s= userInput[0];
    splitString=s.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    var result= joinArray[0].toUpperCase() + joinArray.slice(1);
    
    console.log(result);
    

});