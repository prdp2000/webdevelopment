let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){
    
    let x = 1;
    try {
        console.log("the sum is ",sum*x);
    } catch (error) {
        console.log("Error aa gaya bhai");
    }
    finally{
        console.log("files are being closed and db connection is beging closed");
    }
}

let c = main()