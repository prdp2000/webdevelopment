async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a,b,c){
    return a+b+c
}
(async function main() {
    console.log(a1);
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    // let [x, y, ...rest] = [1, 5, 7, 8, 9, 0, 6, 3]
    // console.log(x, y, rest)

    let obj = {
        a:1,
        b:2,
        c:4
    }

    let {a,b}= obj
    console.log(a,b);

    let arr = [1,2,3]
    // console.log(arr[0]+arr[1]+arr[2]);
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
    var a1 = 7
})()
