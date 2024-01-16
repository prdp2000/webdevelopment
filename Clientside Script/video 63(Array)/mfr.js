let arr = [1,2,34,56,76]
// let newarr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }  

let newarr = arr.map((e ,index,arr)=>{
    return e**2
})
console.log(newarr)

const greaterthenseven = (e)=>{
    if (e>7) {
        return true
    }
    return false
}

console.log(newarr.filter(greaterthenseven))

const red = (a,b)=>{
    return a+b
}

console.log(arr.reduce(red))
