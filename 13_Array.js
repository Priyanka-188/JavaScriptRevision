let num = [11,2,3,34,4]
// console.log(typeof num);

let b = num.toString() //b is now a array
// console.log(b)
// console.log(typeof b)

let c = num.join("-");
// console.log(c,typeof c);

//pop() removes last element from the array
// console.log(num.pop()); //pop() returns the popped element

//push() adds a new element at the end of the array
num.push(40);
// console.log(num)

//shift() removes first element and returns it.
// let s = num.shift();
// console.log(s);


//unshift() adds element to the begining .Returns new aray length.
num.unshift(100);
// console.log(num);

//delete -> array elements can be deleted using the delete operator

delete num[1];
// console.log(num);


//concat() -> used to join arraus to the given array
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];


console.log(a1.concat(a2,a3));