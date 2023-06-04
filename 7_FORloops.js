const prompt = require("prompt-sync")();
//Program to add first n natural numbers

let sum=0;
let n = prompt("Enter a number :");
n = Number.parseInt(n);
for (let i=0;i<n;i++){
    sum+=(i+1)
}
console.log("Sum of first "+ n + "natural number is "+ sum)


//for in loop

let obj = {
    priyanka : 74,
    shubh : 46,
    shiv : 65,
    ritika : 62
}

for ( let a in obj){
    console.log("Marks of " + a + "are "+ obj[a])
}