let random = Math.random()

let a = prompt("enter first number:")
let c = prompt("enter the operator:")
let b = prompt("enter second number:")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"-"
}
console.log(random)
if (random >0.1){
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else
{
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

