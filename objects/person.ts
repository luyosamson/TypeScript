class Person{

   name:string;
    public age:number;

    public constructor (name:string,age:number){
        this.name=name
        this.age=age;
    }

    public getName():string{
        return this.name
    }

    public getInfo():string{
       return `My name is ${this.name}  aged  ${this.age} years old`
    }
}

const person=new Person("Samson",45)
console.log(person.getInfo())
console.log(person.name)
