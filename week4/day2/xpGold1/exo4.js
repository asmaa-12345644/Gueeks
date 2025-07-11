const array = [[1],[2],[3],[[[4]]],[[[5]]]] 
const newArray = array.map((element, i) => {
    if (i < 3) {
      return element[0];
    } else {
      return element.flat(2); 
    }
  });
  
console.log(newArray); 

//bonus
const new_Array = array.map((element, i) => {return (i<3)? element[0]:element.flat(2)})
console.log(new_Array);

//2
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
const newGreeting = greeting.map(tab=> tab.join(" "));
console.log(newGreeting);

// 3
const secondGreeting = newGreeting.join(" ");
console.log(secondGreeting);

// 4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] 
const newTrapped = trapped.flat(Infinity);
console.log(newTrapped);