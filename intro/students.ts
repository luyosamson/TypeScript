// let students:string[]=[]
// students.push(...["Vicky","Samson","Luyo","Omondi"])
// console.log(students)

let student:Array<string>=["Vicky","Samson","Luyo","Omondi"]
console.log(student[2])
console.log(student.pop())
student[1]="Wilson"
console.log(student)

//Multidimentional arrays
    // let matrix:number[][]=[[2,3],[4,2],[4,8]]
    // console.log(matrix[2][1])
let num:number[]=[2,4,6,8,10]
console.log(num)
let num2=num.map((n)=>n*n)
console.log(num2)