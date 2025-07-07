const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList=["banana", "orange","apple"]

function myBill(){
    let T=[]
    for(fruit of shoppingList){
        if(fruit in stock && stock[fruit] >0){
            T.push(prices[fruit]);
//bonus     
            stock[fruit]--;    
        }
    }
    return T.reduce((valactuelle,acc)=> valactuelle+acc,0);
}

console.log(myBill());

