/* Given 2 numbers N,M find the GCD of N and M.If it cannot be found for given number(s) then print -1
Sample Testcase :
INPUT
10 5
OUTPUT
5 */

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
    console.log(gcd_two_numbers(+inp[0], +inp[1]));

});


function gcd_two_numbers(x, y) {
    if (x == 0 || y == 0)
        return -1;
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}