interface shape{
    name:string,
    length:number,
    width:number,
    description?:string,
    readonly color:string;
}

let myShape:shape={
    name:"square",
    length:10,
    width:10,
    description:"All sides are equal",
    color:"Blue"
}

console.log(myShape.description)