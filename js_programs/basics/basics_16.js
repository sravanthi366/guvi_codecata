/* Given a string S consisting of 2 words reverse the order of two words .
Input Size : |S| <= 10000000
Sample Testcase :
INPUT
hello world
OUTPUT
world hello */


// program starts from here....

const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
userInput = [];
inp.on("line", (data) => {

    userInput.push(data);

});

inp.on('close', () => {

    res(userInput);

});

let res = (data) => {

    let str = data[0].split(' ');

    let str1 = str.reverse();
    console.log(str1.join(' '));

};