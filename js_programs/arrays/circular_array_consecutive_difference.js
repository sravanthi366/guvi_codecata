const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var n = userInput[0].split(" ");
var m = userInput[1].split(" ");
//console.log(n[1]);
//console.log(m.length);
if(m.length!=n[0]){
    console.log("Please check the input values...");
    exit();
}

 for(i=0; i<m.length;){
    
        result=m[i]-m[++i];
        
        console.log(Math.abs(result));
    
    
}
});