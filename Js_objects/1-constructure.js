function createPerson(name)
{
    const obj= {};
    obj.name = name;
    obj.introduceelf = function () 
    {
        console.log(`hi Iam ${this.name}`);
    };

    return obj;
}


const winnie = new createPerson('Winnie');
winnie.name
winnie.introduceelf()

const kokole = new createPerson('Kokole');
kokole.name
kokole.introduceelf()