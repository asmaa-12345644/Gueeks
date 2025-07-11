const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];

// 1
s=0
for(let i = 0; i < data.length; i++) {
    s+=data[i].age*7
}
console.log(`The total age in dog years is ${s}`);

//2

const DogsAges=data.map(d=>d.age*7)
const totalAge = DogsAges.reduce((acc, val) => acc + val, 0);
console.log(`The total age in dog years is ${totalAge}`);