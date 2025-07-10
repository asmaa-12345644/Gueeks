let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries=(groceries)=>{groceries.fruits.forEach(fruit=>console.log(fruit))}
    
const cloneGroceries =()=>{
    let user=client
    client="Betty" //no modification on user variable because it is a pass by value
    
    const shopping=groceries
    
    groceries.totalPrice="35$" //yes there will a modification on shopping object because it is a pass by reference
    groceries.other.paid=false //yes there will a modification on shopping object because it is a pass by reference
}

cloneGroceries()