// alert("Enter a value!")
// let value = prompt("Enter a value here")


// let res=confirm("Do you want to print it ? ")
// if(res){
//     document.write(value)
// }
// else{
//     document.write("please allow me to write here")
// }

//Practice set

//question1 Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.

let age = prompt("Enter your age: ")
age = Number.parseInt(age)

alert(age>18?"You can drive!":"You are a minor so you can not drive!")

//question2. In Ques1 use confirm to ask the user if he wabts ti see the prompt again