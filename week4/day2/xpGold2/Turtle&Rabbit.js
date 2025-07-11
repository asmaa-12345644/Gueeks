const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

const offset = startLine.indexOf('<');

const padding = ' '.repeat(offset);

turtle = padding + turtle;
rabbit = padding + rabbit;

console.log(startLine);
console.log(turtle);
console.log(rabbit);

console.log(turtle = turtle.trim().padEnd(9, '=')); 
// Output: 🐢======= the turtle is gonna win the race
