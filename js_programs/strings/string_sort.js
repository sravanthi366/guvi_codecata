const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{
    
    let str = userInput[0].split(',');
     
    console.log(str);
    
   let result = str.sort();
   
   console.log(result.join(','));
   
    
});