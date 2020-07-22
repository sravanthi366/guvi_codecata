/*You are provided with a number check whether its odd or even. 

Print "Odd" or "Even" for the corresponding cases.

Note: In case of a decimal, Round off to nearest integer and then find the output. Incase the input is zero, print "Zero".

Input Description:
A number is provided as the input.

Output Description:
Find out whether the number is odd or even. Print "Odd" or "Even" for the corresponding cases. Note: In case of a decimal, Round off to nearest integer and then find the output. In case the input is zero, print "Zero".*/






const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
var x = userInput;
//Start
if(x==0){
    console.log("Zero")
    exit();
}



if(x - Math.floor(x) !==0){
    var a=Math.round(x);
    console.log(a);
    even_odd(a);
    exit();
}



function even_odd(x){
if(x%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}
}
even_odd(x);

//END





});