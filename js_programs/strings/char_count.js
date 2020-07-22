const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

 let str = userInput[0];
 //console.log(str[0]);
 
 
 let mySet = new Set();

for (let i=0; i<str.length; i++){
    let count =0;
    
    for (let j=0; j<str.length; j++){
        
        if(str[i]==str[j]){
            
            count++;
            
        }
          
          
    }
    
    let value =count+(str[i]);
   
     mySet.add(value);
    
}

    console.log(Array.from(mySet).join(' '));

});