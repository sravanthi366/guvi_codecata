/* Question3: Given a range of 2 numbers (i.e) L and R count the number of prime numbers in the range (inclusive of L and R ).
Input Size : L <= R <= 100000(complexity O(n) read about Sieve of Eratosthenes)
Sample Testcase :
INPUT
2 5
OUTPUT
3*/

/* program starts from here.. */

const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", data => {

    let num = userInput[0].split(" ");
    let num1 = +num[0];
    let num2 = +num[1];

    function prime_interval(n1, n2) {
        var inc = 0
        for (let i = n1; i <= n2; i++) {
            let count = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0)
                    count++;

            }

            if (i > 1 && count == 0)
                inc++;

        }

        console.log(inc);

    }
    prime_interval(num1, num2);
});