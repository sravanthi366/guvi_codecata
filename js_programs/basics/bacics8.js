/* Given a number N and an array of N elements ,find the Bitwise AND of the array elements.
Input Size N <= 100000
Sample Testcase :
INPUT
4
4 3 2 1
OUTPUT
0 */


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
    console.log(bitwiseAnd(num, num1));

    function bitwiseAnd(num, num1) {
        if (num1.length == num)
            return num1[0] & num1[1] & num1[2] & num1[3];
    }

});