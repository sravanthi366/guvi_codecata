/* Given 3 numbers A,B,C print 'yes' if they can form the sides of a right angled triangle,otherwise 'no'.
Input Size : A,B,C <= 100000
Sample Testcase :
INPUT
3 4 5
OUTPUT
yes */


// program starts from here...

const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
userInput = [];
inp.on("line", (data) => {

    userInput.push(data);

});

inp.on('close', () => {

    let sides = userInput[0].split(' ');
    sclane(sides[0], sides[1], sides[2]);

});

let sclane = (s1, s2, s3) => {

    if (s3 == Math.sqrt(Math.pow(s1, 2) + Math.pow(s2, 2)))
        console.log('yes');

    else

        console.log('no');



};