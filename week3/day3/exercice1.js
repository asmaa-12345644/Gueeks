function displayNumbersDivisible(){
    let s=0
    console.log("Outcome: ")
    for(let i=0;i<=500;i++){
           if(i%23===0){
              s+=i
              console.log(i);}
    }
    console.log("Sum:"+s)
} 

//bonus

function displayNumbersDivisible(divisor){
    let s=0
    for(let i=0;i<=500;i++){
           if(i%divisor===0){
              s+=i
              console.log(i);}
    }
    console.log(s)
} 

displayNumbersDivisible();     
displayNumbersDivisible(3); 