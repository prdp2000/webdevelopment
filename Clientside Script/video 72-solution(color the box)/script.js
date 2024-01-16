// console,log("Script.js initializing")
// // let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children
// console.log(boxes)


// function getRandomColor(){
//     let val1 = Math.ceil(0+Math.random()*255);
//     let val2 = Math.ceil(0+Math.random()*255);
//     let val3 = Math.ceil(0+Math.random()*255);
//     return `rgb(${val1},${val2},${val3})`
// }
// Array.from(boxes).forEach(e=>{
// e.style.backgroundColor = getRandomColor()
// e.style.Color = getRandomColor()

// })


let boxes = document.querySelectorAll(".box")

for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    var randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
box.style.color = randomColor;
box.style.backgroundColor = randomBackgroundColor;

box.textContent = randomColor;
    
}