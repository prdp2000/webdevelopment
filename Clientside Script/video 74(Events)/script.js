let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
document.querySelector(".box").innerHTML = "<b> Yayye you were clicked </b> Enjoy your click!"
})

button.addEventListener("contextmenu",()=>{
alert("Don't hack us by rigth click")
})
document.addEventListener("keydown",(e)=>{
console.log(e,e.key,e.keyCode)
})