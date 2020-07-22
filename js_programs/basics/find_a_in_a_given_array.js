/*Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
Sample Testcase :
INPUT
4 2
1 2 3 3
OUTPUT
yes*/

// program starts from here.

const readLine=require('readline');
const inp=readLine.createInterface({
    input:process.stdin

});
const userInput=[];
inp.on("line" ,(data)=>{
    userInput.push(data);

});
inp.on("close", ()=>{
var N=userInput[0].split(" ");
var K=userInput[1].split(" ");
/*console.log(N.length);
console.log(N[0]);
console.log(N[1]);

console.log(K.length);

for(i=0; i<K.length; i++){


    console.log(K[i]);
}
*/

// i have created new variable called falg and assigned to zero.
let flag=0;
for (i=0; i<K.length; i++){     //it will Iterate upto k.length.

    if(N[1]==K[i]){ //vallidating n variable to k variable.

    flag=flag+1; // if the given number is present in the given list             //the flag value incremented by 1.
}

};

if(flag!=0){
    console.log("yes");
}else{
    console.log("no");
}


});
