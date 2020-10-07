/* Question 24 
Given base(B) and height(H) of a triangle find its area.
Input Size : N <= 1000000
Sample Testcase :
INPUT
2 4
OUTPUT
4 */


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
    let inp = userInput[0].split(' ');
    console.log(area(inp[0], inp[1]));
});

const area = (height, base) => {

    return (height * base) / 2;
};