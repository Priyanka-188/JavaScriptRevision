//nn bb ss u ---> primities in Javascript
let a = 'null';
let b = 45;
let c = true;
let d = BigInt(85) +BigInt(5);
let e = "Krishna";
let f = Symbol("Radhe Krisna!");
let g ; // undefined
console.log( a,b,c,d,e,f,g);
console.log(typeof a,b,c,d,e,f,g);

//Non-Primitives datatypes --> Objects in Js --> Key value pairs 

const item = {
    "Name ": "Priyanka",
    "Friend ": "Swati",
    "best friend" : "Krisna"
}
console.log(item);
console.log(item['best friend']);
console.log(item['rohan']); // it will not give error it will  return undefined