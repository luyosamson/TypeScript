// let students:string[]=[]
// students.push(...["Vicky","Samson","Luyo","Omondi"])
// console.log(students)
var student = ["Vicky", "Samson", "Luyo", "Omondi"];
console.log(student[2]);
console.log(student.pop());
student[1] = "Wilson";
console.log(student);
//Multidimentional arrays
// let matrix:number[][]=[[2,3],[4,2],[4,8]]
// console.log(matrix[2][1])
var num = [2, 4, 6, 8, 10];
console.log(num);
var num2 = num.map(function (n) { return n * n; });
console.log(num2);
