/*You will be provided with a number. Print the number of days in the month corresponding to that number.

Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

Input Description:
The input is in the form of a number.

Output Description:
Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.*/

//program starts from here.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var x=userInput[0];
    
    
    if(x>=1 && x<=12){
       
        var date= new Date(2020, x, 0).getDate()
        console.log(date);
       
       
    }else{
        console.log("Error");
    }
    
});