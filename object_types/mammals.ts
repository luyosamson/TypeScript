interface Mammals{
    name:string;
    age:number;
    legs?:number;
    has_fur:boolean
}

let cows:Mammals={
    name:"Apalla",
    age:5,
    legs:4,
    has_fur:true

}
console.log(cows)