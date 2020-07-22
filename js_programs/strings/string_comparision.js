/*Given 2 strings S1 and s2, check whether they are case senitively equal without using any predefined function(case sensitive).If they are not same print 'no'
Sample Testcase :
INPUT
guvi guvi
OUTPUT
yes*/

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
    if(str1==str2)
    console.log("yes");
    else
    console.log("no");
    
    
    
    
    
});