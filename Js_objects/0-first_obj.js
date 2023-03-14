const person = {
    name: ['bob', 'smith'],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`)
    },
    introduceSelf: function() {
        console.log(`Hello Iam ${this.name[0]}`)
    }
}

person.bio()

person.introduceSelf()
