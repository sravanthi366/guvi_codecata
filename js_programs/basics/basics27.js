







/* Given a number N followed by N numbers.Find the smallest number and largest number and print both the indices(1 based indexing).
Input Size : N <= 100000
Sample Testcase :
INPUT
5
1 2 3 4 5
OUTPUT
1 5 */



const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
userInput=[];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", (data) => {
  let inpsize = userInput[0].split(' ').map(x=>+x).toString();
    let inp1 = userInput[1].split(' ').map(x=>+x);
    res = [];
    let min , max;
    let val1 , val2;
 for (i =1;i<inp1.length;i++){
      
    if(inpsize ==inp1.length){
      
      val1 = Math.min(...inp1);
      val2 =Math.max(...inp1);
    min =inp1.indexOf(val1);
    max =inp1.indexOf(val2);
    
  }
  }
    res.push(min+1);
    res.push(max+1);
   
   console.log(res.join(" "));
});