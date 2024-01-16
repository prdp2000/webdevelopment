let a = 6

function factorail(number) {
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    // let c = arr.slice(1,).reduce((d,e)=>d*e)
    return c
}
function factfor(number){
    let fac = 1
for (let index = 1; index < number; index++) {
fac = fac *index
}
return fac
}
console.log(factorail(a))
console.log(factfor(a))