//WAP to take input from the user and update the array with the element
const prompt = require('prompt-sync')();
let arr = [1];
console.log(arr);
let size = prompt("Enter the size of array : ");
console.log("Enter the elements of array ")
for(let i=0;i<size;i++);
{
   let element = prompt("Enter "+ i+"th "+"element ")
   element = Number.parseInt(element)
   arr.push(element)
}
console.log(arr);

//Question 2
console.log("Hello this is programming")