let name = "Krishna";
let name1 = "Radha";

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

console.log(name.slice(2,5));
console.log(name.slice(2));
console.log(name.slice(-2));

console.log(name.replace("Kr","Radh"));

console.log(name1.concat(name));
console.log(name1+name);
console.log(name1.concat(" is very dear to ",name));

let name2 = "   Nitaya Goranga    ";
console.log(name2.trim());

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

//Quick Quiz Use  a for loop to print a string

for (let i=0;i<name1.length ;i++){
    console.log(name1[i]);
}