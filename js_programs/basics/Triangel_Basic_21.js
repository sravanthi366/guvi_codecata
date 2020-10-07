/* Given 3 numbers A,B,C process and print 'yes' if they can form the sides of a triangle otherwise print 'no'.
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

    sclane(+sides[0], +sides[1], +sides[2]);

});

let sclane = (side1, side2, side3) => {


    if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        console.log('yes');

    else

        console.log('no');



};