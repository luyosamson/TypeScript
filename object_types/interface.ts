interface person{
    name:string;
    age:number;
    gender?:string;
    readonly race:string

}

let users:person={
    name:"Samson",
    age:23,
    gender:"male",
    race:"African"
}
console.log(users)
console.log(users.name)