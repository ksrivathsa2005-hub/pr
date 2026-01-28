class Person {
     name: string;
    age: number;

    constructor(name:string,age:number)
    {
        this.name =name;
        this.age=age;
    }

    greet()
    {
        console.log(`Good Morning ${this.name}`);
    }
}
const p=new Person("Praneeth",22);
p.greet();