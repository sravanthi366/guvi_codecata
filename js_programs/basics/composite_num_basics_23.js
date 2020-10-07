/* Question 23: Given a number N, print 'yes' if it is composite else print 'no'.
Sample Testcase :
INPUT
123
OUTPUT
yes*/



/* program starts from here */

const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let inp = +userInput;
    compositeNumber(inp);

});

let count = 0;

const compositeNumber = (num) => {

    for (let i = 1; i <= num; i++) {
        if (num % i === 0)
            count++;
    }
    if (count > 2)
        console.log(`yes`);
    else
        console.log(`no`);


};