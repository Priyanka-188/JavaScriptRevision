const prompt = require("prompt-sync")();
let n = prompt("Enter the value of n ");
n = Number.parseInt(n)

// while loop
// let i = 0;
// while(i<n){
//     console.log(i)
//     i++;
// }


// dowhile loop
let i = 0;
do{
    console.log(i+1)
    i++;
}while(i>n)
