const prompt = require('prompt-sync')();

//question1 . What will the following print in javascript..... 
// console.log("har\"".length);  //It will print 4 not 5 


//Question 2. Explore the includes , startsWith & endsWith functions of a string.

// let str = "Hello my name is Priyanka Saini";
// console.log(str.startsWith("Hello"));
// console.log(str.endsWith("Saini"));
// console.log(str.includes("Priyanka"))

//Question3 WAP to convert a given string to lowercase.
// console.log(str.toLocaleLowerCase());


//Question4 Extract the amount from string
let str2 = "Please  give Rs 1000";
let amount = Number.parseInt(str2.slice("Please  give Rs ".length))
console.log(amount);
console.log(typeof amount);