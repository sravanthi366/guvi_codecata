const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const userInput = [];

inp.on("line", (data) => {
 userInput.push(data);

 console.log(data);
// console.log(`Line from oot: ${data}`);
 //inp.close();
});

inp.on("close", () => {
    
    var s= userInput[0];
    console.log(s)

    
});
