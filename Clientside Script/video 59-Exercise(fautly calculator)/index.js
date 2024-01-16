/* create a faculty calculator

this faulty calculator does 1following:
1. It takes two number as input from the user
2. It performs wrong operations as follows:
+ ----> -
* ----> +
- ----> /
/ ----> -

It performs wrong operation 10% of the times

*/

const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Enter the value of A:"));
let b = parseFloat(prompt("Enter the value of B:"));
let i = 0
while (i < 11) {
    let c = Math.random()
    console.log(c)
    i++
    a = Math.random()
    b = Math.random()
    if (c > 0.1) {
        console.log("the Sum of a and b is ", (a + b));
        console.log("the Substraction  of a and b is ", (a - b));
        console.log("the Multiplication of a and b is ", (a * b));
        console.log("the Division of a and b is ", (a / b));
    }
    else {
        console.log("the Sum of a and b is ", (a * b));
        console.log("the Substraction  of a and b is ", (a / b));
        console.log("the Multiplication of a and b is ", (a + b));
        console.log("the Division of a and b is ", (a - b));
        break;
    }
}