interface person{
    name:string;
    age:number;
    gender?:string;
    readonly race:string
}
let userss:person={
    name:"Samson",
    age:23,
    gender:"male",
    race:"African"
}
console.log(userss)

console.log(userss.name)