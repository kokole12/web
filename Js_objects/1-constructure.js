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

const winnie = createPerson('Winnie');
winnie.name
winnie.introduceelf()