// CHAPTER 1
// question 1 . WAP Add a number in a string.

let a = "Krishna";
let b = "0";
let c = a+b;
// console.log(c);


// question2. Use typeof  operator to find the type of the strinf in last question.
// console.log(typeof (c))

// question 3. 
const ob = {
    'name':"Krsna ",
    'priyaa':"Radha Rani ",
    'me':'part',
    'love' :100,
    'isbind':false
}
console.log(ob);
console.log(ob['name']);

//Question 4. Try to add a new key to the const objet in problem 3 .Were you able to do it?  //yes we can do it 

ob['newkey']='newvalue';
console.log(ob)

// question 5 Write a JS program to creat a word-meaning dictionary of 5 words.
const dict ={ 
    'you':'tum',
    'chair':'kurshi',
    'pillow':'takiya',
    'spoon':'chammach',
    'Krisna':'Radha'
}
//there are 2 ways to access values of object
console.log(dict.Krisna);
console.log(dict['Krisna']);

