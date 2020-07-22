const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
    var data =userInput[0].split(" ");
    console.log (data);
    
    for(i=0; i<data.length; i++){
        
        if(data[i]%10==0){
            
            console.log(data[i]);
        }
        
        
    
    }
    

    

});