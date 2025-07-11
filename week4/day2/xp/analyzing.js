// 1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
 //the Outout is [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]


 // 2
const country = "USA";
console.log([...country]);
//the output is [ 'U', 'S', 'A' ]


// 3
let newArray = [...[,,]];
console.log(newArray);
//the output is [ <2 empty items> ] =>(2) [undefined, undefined]

