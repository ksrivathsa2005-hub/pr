var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Good Morning ".concat(this.name));
    };
    return Person;
}());
var p = new Person("Praneeth", 22);
p.greet();
