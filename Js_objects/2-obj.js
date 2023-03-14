const Person = {
    name: 'Winnie',
    age: 35,
    heritage: 'Irish'
}


const child = Object.create(Person);

child.name = 'Winnie';
child.age = 18;

console.log(child.name);
