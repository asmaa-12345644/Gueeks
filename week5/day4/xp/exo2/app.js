import { people } from "./data.js";

function averageAge(arr) {
  const total = arr.reduce((sum, p) => sum + p.age, 0);
  return total / arr.length;
}

console.log(`Average Age: ${averageAge(people)}`);
