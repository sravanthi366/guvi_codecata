/* Given a number N and an array of N elements, find the Bitwise OR of the array elements.
Input Size : N <= 100000
Sample Testcase :
INPUT
2
2 4
OUTPUT
6 */


const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let num = userInput[0];
    let num1 = userInput[1].split(" ");
    console.log(bitwiseOr(num, num1));

    function bitwiseOr(num, num1) {
        if (num1.length == num)
            return num1[0] | num1[1];
    }

});