function hotelCost(){
    let user=parseInt(prompt("Enter the number of nights that you would like to stay in the hotel."))
    while(isNaN(user) || !user){
        user=parseInt(prompt("Enter the number of nights that you would like to stay in the hotel."))
    }
    return user*140
}

function planeRideCost(){
    let destination=prompt("Enter your destination: ")
    while(!destination ){
        destination=prompt("Enter your destination: ")
    }
    if(destination.toLowerCase()==="london")
        return 183
    else if(destination.toLowerCase()==="paris")
        return 220
    else
        return 300

}

function rentalCarCost(){
   let days=parseInt(prompt("Enter  the number of days that you would like to rent the car."))
   while(isNaN(days) || !days || days <= 0){
      days=parseInt(prompt("Enter the number of nights that you would like to stay in the hotel."))
   }
   
   if(days>10)
      return days*40*0.95
   else
       return days*40
}

function totalVacationCost(){
    console.log(`The car cost: $${rentalCarCost()}, the hotel cost: $${hotelCost()}, the plane tickets cost: $${planeRideCost()}.`);
       return hotelCost()+planeRideCost()+rentalCarCost()
}

console.log(totalVacationCost())