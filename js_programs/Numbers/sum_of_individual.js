const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

    let no= parseInt(userInput[0]);
    let sum=0;
   let  b=no;
    while(no>0){
        a=no%10;
        no=parseInt(no/10);
        sum = sum+a;
        
    }
    console.log(`Sum is: ${sum}`)

});