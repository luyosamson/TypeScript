var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getInfo = function () {
        return "My name is ".concat(this.name, "  aged  ").concat(this.age, " years old");
    };
    return Person;
}());
var person = new Person("Samson", 45);
console.log(person.getInfo());
console.log(person.name);
