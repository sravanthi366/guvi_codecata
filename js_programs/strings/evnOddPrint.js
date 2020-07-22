const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];


inp.on("line", (data) => {
  userInput.push(data);
  
});
inp.on("close", () => {
  
  let arrSize=userInput[0];
  
  let arr=userInput[1].split(' ');
  let esum=0;
  let osum=0;
  //console.log(arr.join(' ')+":"+arrSize)
  
  for(let i=arrSize-1;i>=0;i--){
      if(arr[i]%2==0){
          esum += parseInt(arr[i]);
      }else{
          osum += parseInt(arr[i]);
      }
  }
  
  let rArr;
  if(osum>esum){
      
      rArr=arr.sort((a,b)=>a-b);
      console.log(rArr.join(' '));
      
  }else{
      
      rArr=arr.sort((a,b)=>b-a);
      console.log(rArr.join(' '));
  }
  
  
  });