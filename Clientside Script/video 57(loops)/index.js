console.log("I am a tutorial on loops");

// let a = 1
// // console.log(a);
// // console.log(a+1);
// // console.log(a+2);
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }
let obj = {
    Name:"Pradeep",
    role:"Programmer",
}

for (const key in obj) {
    const element = obj[key];
   console.log(key, element)
}