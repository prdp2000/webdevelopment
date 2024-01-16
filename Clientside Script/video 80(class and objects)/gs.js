class User{

     constructor(name){

        this.name = name
     }
     get name() {
        return this._name;
     }
     set name(value){
        if (value.length < 4){
            alert("Name is too short.")
            return
        }
        this._name = value
     }
}

let user = new User("Pradeep")
alert(user.name)//pradeep

user.name = " harry"// Name is too short
console.log(user.name);