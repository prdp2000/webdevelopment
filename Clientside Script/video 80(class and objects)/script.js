// let obj = {
//     a : 1,
//     b : 'pradeep'
// }

// console.log(obj);

// let animal = { 
//     eats:true
// }
// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;// sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("object is created");
    }

    eats(){
        console.log("ka raha hoon");
    }
    jumps(){
        console.log("kood raha hoon");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name = name
        console.log("Object is created and he is a lion");
    }
    eats(){
        super.eats()
        console.log("ka raha hoon roar");
    }

}

let a = new Animal("bunny");

console.log(a);

let l = new Lion("shera")
console.log(l);