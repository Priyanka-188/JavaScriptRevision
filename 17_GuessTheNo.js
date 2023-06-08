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