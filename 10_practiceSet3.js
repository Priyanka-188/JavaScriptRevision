const prompt = require('prompt-sync')();
//question 1 . WAP to print the marks of a student in an object using for in loop
// const obj = {
//     harry : 98,
//     rohan : 70,
//     aakash :7
// }
// for (let i in obj)
// {
//     console.log("The marks of "+ i +" are " +obj[i]);
// }

//Question 2 . WAP to print "try again" until the user enters the correct number

let cn =8
let i= 0;
while(true){
    let num = prompt("Enter right number ");
    num = Number.parseInt(num);
    if (num ==cn){
        console.log("You have entered a correct number");
        break;
    }
    else{
        console.log('try again!')
        i++;
    }
}


//Question3. Write a function to find mean of 5 numbers ?
const mean=(a,b,c,d,e) =>{
    res = (a+b+c+d+e)/5;
    return res;
}

console.log("The mean of 5 numbers is ",mean(5,5,5,5,5));



