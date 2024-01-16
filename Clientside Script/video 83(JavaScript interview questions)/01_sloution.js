// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["pradeep","anil","kartik","manoj","viji","rishi","nanda","anand","praveen","kavya","divya"]

let houses =[]
for (const student of students) {
    if(student.length<6){
        houses.push("s;ladjf;la")
    }
    else if(student.length<8){
        houses.push("khlsadiujkd")
    }
    else if(student.length<12){
        houses.push("khlsadiujkd")
    }
    else {
        houses.push("khlsadiujkd")
    }
}

console.log(houses);