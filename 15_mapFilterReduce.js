//map,filter and reduce method

//1. Map()  -->it creates new aray after manipulation
let num = [1,2,3,4,5,6,7];
console.log(num)

let a = num.map((value,index)=>{
    console.log(value,index)
    return value +index
})
console.log(a)

//2.filter() function
let arr2 = [45,23,5,56,2,3,1]
let b= arr2.filter((a)=>{
    return a<10
})
console.log(b)


//3. reduce() function

let arr3 = [1,2,3,4,5,0,22]
let newarr3 = arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3)
