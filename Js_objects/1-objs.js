function Animal(name, energy){
    let animal = {};

    animal.name = 'leo';
    animal.energy = 10;

    animal.eat = function (amount){
        console.log(`${this.name} is eating` );
        this.eat += amount;
    }

    animal.sleep =  function (length){
        console.log(`${this.name} is sleep`);
        this.energy += length;
    }

    animal.play = function(length){
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }

    return animal;
}

const leo = Animal('leo', 23);

leo.sleep(10);