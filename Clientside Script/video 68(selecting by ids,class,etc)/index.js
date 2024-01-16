// document.getElementById("redbox").style.backgroundColor ="red"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "orange"
})
// document.querySelector(".box").style.backgroundColor = "pink"
console.log(document.querySelectorAll(".box"))

document.getElementsByTagName("div")