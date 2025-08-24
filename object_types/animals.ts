type animals={
    animalName:string;
    animalsNumbers?:number;
    readonly animalClass:string

}

let x:animals={
    animalName:"Cow",
    animalsNumbers:10,
    animalClass:"Mammals"
}

console.log(x.animalClass)

x.animalName="Donkey"

console.log(x.animalsNumbers)