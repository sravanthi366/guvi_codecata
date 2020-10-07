const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", (data) => {
    let str = userInput[0];

    function balance(s) {
        let open_brace = ["{", "[", "("];
        let closed_brace = ["}", "]", ")"];
        const stack = [];
        for (let i = 0; i < s.length; i++) {

            if (s[i] === open_brace[i])

                stack.push(s[i]);


            else if (s[i] === closed_brace[i]) {
                let pos = indexOf(closed_brace[i]);
                
                if (stack.length > 0 && (open_brace[pos] === stack[stack.length - 1])) {
                    stack.pop();


                } else {
                    return "no";
                }

            }
            if (stack.length === 0)
                return "yes";

            else
                return "no";
        }

    }


    balance(str);

});