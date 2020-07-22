const readline = require('readline');
const inp = readline.createInterface({
    
    input:process.stdin
});

const userInput = [];

inp.on("line" , (data)=>{
    
    userInput.push(data);
});

inp.on("close", ()=>{

    let inpCount = parseInt(userInput[0]);
    let str = userInput[1].split(' ');
    
    for(let i=0; i<str.length; i++){
      //console.log(str[i]);
      let pstr= str[i].toUpperCase();
     // console.log(pstr);
      let flag=0;
      let len=pstr.length-1;
      
      for(let j=0; j<len/2; j++){
           //console.log('pstr[j]:'+pstr[j]);
          // console.log('pstr.length:'+pstr[len-j]);
          if(pstr[j]==pstr[len-j]){
             // console.log('T:'+pstr[j]+'=='+pstr.length-j);
              flag=0;
          }else{
              //console.log('F:'+pstr[j]+'=='+pstr.length-j);
              flag=1;
              break;
          }
      }
     // console.log('flag:'+flag);
      if(flag==0){
          console.log(`${pstr}  : It is a palandrom`);
      }else{
          console.log(pstr +" : It is not a palandrom");
      }
      
    }
    
    
    
    
   

});