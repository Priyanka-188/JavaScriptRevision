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

//question1 Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.and Show an error using console.error if the age entered by user is negative.
let runAgain = true;

let canDrive = (age) => {
  return age >= 18 ? true : false;
};
while (runAgain) {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (age<0){
    console.error("age can not be negative")
    break;
  }
  else{
      if (canDrive(age)) {
        alert("Yes you can drive");
      } else {
        alert("You can not drive");
      }

  }

  runAgain = confirm("Do you want to see the prompt again?");
}
//question2. In Ques1 use confirm to ask the user if he wabts ti see the prompt again
