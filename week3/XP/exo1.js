const people = ["Greg", "Mary", "Devon", "James"];
let rmv=people.shift();
let rplc=people.splice(2,1,"Jason");
let ajout=people.push("Asmaa");
let mary_index=people.indexOf("Mary");

let copie = people.slice(1, people.length - 1);

console.log(people.indexOf("FOO"));
//it returns -1 bcs FOO doesn't exist in the list

let last=people[-1]; //or let last=people[people.length-1]

for(let person of people)
    console.log(person);

for (let i in people){
    console.log(people[i]);
    if(people[i]=="Devon")
        break;
}
     
