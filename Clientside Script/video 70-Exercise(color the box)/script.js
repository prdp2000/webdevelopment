// // 
// function r(){
//     return Math.floor(Math.random()*256);
// }

// const color0 = "rgb("+r()+","+r()+","+r()+")";
// const color1= "rgb("+r()+","+r()+","+r()+")";
// const color2 = "rgb("+r()+","+r()+","+r()+")";
// const color3 = "rgb("+r()+","+r()+","+r()+")";
// const color4 = "rgb("+r()+","+r()+","+r()+")";

// let boxes = document.getElementsByClassName("box")

// boxes[0].style.backgroundColor = color0
// boxes[1].style.backgroundColor = color1
// boxes[2].style.backgroundColor = color2
// boxes[3].style.backgroundColor = color3
// boxes[4].style.backgroundColor = color4

// boxes[0].style.color = color1
// boxes[1].style.color = color2
// boxes[2].style.color = color3
// boxes[3].style.color = color4
// boxes[4].style.color = color0


let boxes = document.getElementsByClassName("box")

function getcolor(){
    r1 =  Math.floor(Math.random()*256)
    r2 =  Math.floor(Math.random()*256)
    r3 =  Math.floor(Math.random()*256)

    return `rgb(${r1},${r2},${r3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getcolor()
    e.style.color = getcolor()

})