class Person{
    name;

    constructor(name){
        this.name =  name;
    }
    introduceelf(){
        console.log(`My name is ${this.name}`);
    }
}

const giles = new Person('Nameless');

giles.introduceelf();
