/* Given a number N, print the Bitwise NOT of that number.
Input Size : 1 <= N <= 10000
Sample Testcase :
INPUT
5
OUTPUT
-6 */



const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let num = +userInput;

    console.log(bitwiseNot(num));

    function bitwiseNot(num) {
        return ~num;
    }

});