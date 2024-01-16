const fs = require("fs")

// console.log(fs);

console.log("starting");
// fs.writeFileSync("harry.txt","Pradeep is a good boy")
fs.writeFile("harry2.txt","harry is a good boy",()=>{
    console.log("done");
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

fs.appendFile("harry.txt","harry" ,(e,d)=>{
    console.log(d);
} )

console.log("ending");