//   [2] === [2]  =>True
//   {} === {}   =>False

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // Output: 4
console.log(object3.number) // Output: 4 
console.log(object4.number)  // Output: 5


class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal{
    constructor(name,type,color){
        super(name,type,color);
    }
    sound(son){
        return ` ${son} I'm a ${this.type} ,named ${this.name} and I'm ${this.color}.`;
    }
}

farerCow= new Mammal('Cow', 'Lily', 'brown');
console.log(farerCow.sound('Moo')); // Output: Farmer Cow makes a moo sound because it's a Mammal and its color is Brown.
