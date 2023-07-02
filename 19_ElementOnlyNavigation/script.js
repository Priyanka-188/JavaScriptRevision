const changeBgRed =()=>{
    document.body.firstElementChild.style.background="red"
}
let b = document.body
console.log("First child of b is ",b.firstChild)
console.log("First Element child of b is ",b.firstElementChild)

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

//inner and outer HTMl
first.outerHTML = "<div>Only  <b>Hare Krishna </b></div>";
//inner HTML is valid only for element nodes.
console.log(document.body.firstElementChild.data);