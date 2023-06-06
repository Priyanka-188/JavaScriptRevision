let num = [1,6,3,2,4,3];

//1. Simple for loop
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}

//ForEach loop
num.forEach(element => {
    console.log("The square of "+element + " is "+ element*element);
});

//Array.from
let name = "Krishna";
let arr = Array.from(name);
console.log(arr)

//for..of  ---->returns the values
for (let item of num){
    console.log(item)
}


//for...in ----> returns the keys or index number
for(let i in num){
    console.log(num[i])
}




