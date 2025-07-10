function makeJuice(size){
    function addIngredients(ingredient1, ingredient2,ingredient3){
        const div=document.createElement("div");
        div.innerHTML=` The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`
        document.body.appendChild(div);
    }
    addIngredients("apple", "banana", "orange");

}
makeJuice("large");


// Part ||

function makeJuice(size){
    const ingredients=[]
    function addIngredients(ingredient1, ingredient2,ingredient3){
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }
    addIngredients("apple", "banana", "orange");
    addIngredients("kiwi", "mango", "pineapple");

    function displayJuice(){
        const div=document.createElement("div");
        div.innerHTML=` The client wants a ${size} juice, containing ${ingredients.join(", ")}.`
        document.body.appendChild(div);
    }
    displayJuice();
}
    
makeJuice("large")
