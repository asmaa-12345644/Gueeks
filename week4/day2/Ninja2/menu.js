const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]

console.log(menu.some(m=>m.type=="dessert")?"Yes, we have dessert!":"No, we don't have dessert!");

// 2
console.log(menu.every(m=>m.type=="starter"));

// 3
const check = menu.some(m => m.type === "main course");
if (!check) {
  const objet = {
    type: "main course",
    name: "Chicken with Rice"
  };
  menu.push(objet);
}
console.log(menu);


const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
//1


menu.forEach(m => {
    m.vegetarian = vegetarian.some(v => m.name.toLowerCase().includes(v));
  });
  
  console.log(menu);

console.log(menu);