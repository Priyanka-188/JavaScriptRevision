// question 1. Change the color of the first element of the navbar .

let a = document.getElementsByTagName('li')

// console.log(a[0].style.color="red")
console.log(a[1].style.color = "Blue")
// console.log(a[2].style.color = "Purple")

// question2. Create a table without tbody. Now use "View page source" button to check wheather it has a tbody or not.
// No, it does not show the tbody.

//question3. Create an element with 3 children . Now change the color of first and last element to green.

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"

document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"


//Question 4. Write a javascript code to change background of all <li> tags to yellow.

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "yellow"
});