const prompt = require("prompt-sync")();

//question 1. Use logical operator to find wheather the age of a person lies between 10 and 20
// let age = prompt("Enter your age ");
if (age>10 && age<20){
    console.log("The age lies between 10 and 20");
}
else{
    console.log("The age does not lies between 10 and 20");
}

// question2. Demonstrate the use of switch case statements in JS
const number= prompt("Enter a number ");//prompt give string as output
const num = Number.parseInt(number);
// console.log(typeof num);
switch(num){
    case 10:
        console.log("no. is 10")
        break;
    case 20:
        console.log("no.is  20")
        break
    default:
        console.log("Invalid input")
}

//Question3 . Write a javascript program to find whether a numver is divisible by 2 and 3
// const number= prompt("Enter a number ");//prompt give string as output
// const num = Number.parseInt(number);
if (num%2==0 && num%3==0)
{
    console.log("number is divisible by both 2 and 3");
}
else{
    console.log("number is not divisible by both 2 and 3")
}

//Question4 . Write a javascript program to find whether a numver is divisible by either 2 or 3
// const number= prompt("Enter a number ");//prompt give string as output
// const num = Number.parseInt(number);
if (num%2==0 || num%3==0){
    console.log("Number is divisible by either 2 or 3");
}
else{
    console.log("Number is not divisible by either 2 or 3");
}

// Question .print "You can Drive" or "You cannot drive" based on age being grater than 18 using ternary operator

let age = prompt("Enter your age ");
age = Number.parseInt(age)

console.log("You can ",age>18?"drive":"not drive");

