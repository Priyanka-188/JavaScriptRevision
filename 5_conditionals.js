const prompt = require("prompt-sync")();

let a = prompt("Hey whats your age?")
a = Number.parseInt(a) //converting the string into a number
if (a>=18){
    console.log("You can cast vote. ");
}
else{
    console.log("Sorry, You are a minor .So, you can not cast vote!");
}

//ternary operator
console.log("You can ", (a>=18?"drive":"not drive"))