const f = require("lodash");
const { add, multiply } = require("./math");

console.log("Add:", add(3, 5));
console.log("Multiply:", multiply(4, 2));

console.log("Max of [3,10,2]:", f.max([3, 10, 2]));
