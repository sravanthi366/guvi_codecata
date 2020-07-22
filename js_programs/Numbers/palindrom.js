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
    temp=0;
   let  b=no;
    while(no>0){
        a=no%10;
        no=parseInt(no/10);
        temp=temp*10+a;
    }
    if(temp==b){
    console.log("Palindrome number");
    }else{
    console.log("Not Palindrome number");
    }

});