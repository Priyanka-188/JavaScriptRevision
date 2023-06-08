//Problem : Write a JS program to generate a random number and store it in a variable. The program then takes an inout fromthe user to tell them wheather the fuess was correct , greater or lesser than the orifinal number.
// 100-(number of gueeses) is the score of the user. The programm is exoected to terminate ince the number is guessed. Number should be between 1 to 100.

const prompt = require('prompt-sync')();

let num = Math.round((Math.random()*100));
let value;
let guess = 0
do{
   value = prompt("Enter a number: ")
   guess = guess+1
   if (value<num){
    console.log("Your guess is less than original number .Try again! ")
   }
   else{
    console.log("Your guess is greater than original number .Try again! ")
   }
}while(value!=num)

console.log("The Orinal number is "+num+" And Your score is ",guess)