array=[
    {"id": 1, "quote": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"id": 2, "quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
    {"id": 3, "quote": "Do not wait to strike till the iron is hot, but make it hot by striking.", "author": "William Butler Yeats"},
    {"id": 4, "quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"},
    {"id": 5, "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston S. Churchill"},
    {"id": 6, "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"},
    {"id": 7, "quote": "The best way to predict the future is to invent it.", "author": "Alan Kay"},
    {"id": 8, "quote": "Life is 10% what happens to us and 90% how we react to it.", "author": "Charles R. Swindoll"},
    {"id": 9, "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"id": 10, "quote": "Your time is limited, so don't waste it living someone else's life.", "author": "Steve Jobs"}
]

section= document.getElementById("quote");
submit= document.getElementById("generate");

let lastIndex = -1; 
submit.addEventListener("click", function () {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * array.length);
  } while (randomIndex === lastIndex); 

  const { quote, author } = array[randomIndex];

  section.innerHTML = `
    <p>${quote}</p>
    <br><br>
    <p style="text-align: right; color: rgb(37, 172, 37);"><em> ${author}</em></p>
  `;
  lastIndex = randomIndex;
});