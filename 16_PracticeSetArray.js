const prompt = require('prompt-sync')();
//WAP to take input from the user and update the array with the element
// let arr = [];
// console.log(arr);
// let size = prompt("Enter the size of array : ");
// console.log("Enter the elements of array ")
// for(let i=0;i<size;i++);
// {
//    let element = prompt("Enter "+ i+"th "+"element ")
//    element = Number.parseInt(element)
//    arr.push(element)
// }
// console.log(arr);

//Question 2 Keep adding numbers to the array in quest1 untill 0 is added to the array

let arr = [];
console.log(arr);
console.log("Enter the elements of array ")
let i=0 , element;
while(true)
{
   element = prompt("Enter "+ i+"th" +" element ")

   if(element==0){
      arr.push(element)
      break
   }
   else{
      arr.push(element)
      i=i+1
   }
}
console.log(arr);


// Question3. Filter for numbers divisible by 10 from the array in 2nd question

let filterarray = arr.filter((element)=>{
   return element%10==0
})

console.log("The filtered array of less than 10",filterarray);

//Question4 Create an array of square of given numbers in array.

let maparray = arr.map((element)=>{
   return element*element
})
console.log("The squared array is " , maparray)

//Question 5. use reduce funciton to find factorial

let arr1 = [1,2,3,4,5]
let n = arr1.reduce((x1,x2)=>{
   return x1*x2
})
console.log(n)