function Animal(name, energy){
    let animal = Object.create(Animal.prototype);

    animal.name = name;
    animal.energy = energy;

    return animal;
}


Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating`);
    this.energy += amount;
}


const leo = Animal('leo', 23);

leo.eat(111);