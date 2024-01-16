const prompt = require('prompt-sync')();

let number = prompt("enter the number to calculate the factorail of the number:")
let factorail = 1
for (let i = number ; i >= 1; i--) {
    factorail = factorail * i
}

console.log(`the factoraial of \" ${number} \"is ${factorail}`)