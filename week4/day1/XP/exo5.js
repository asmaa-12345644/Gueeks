function declaration(w){
    return w*1000
}
console.log(declaration(1))


const expression = function(w){
    return w*1000
}
console.log(expression(1))

//3 there is no difference between the two functions, both return the same result.

const arrow_function=(w)=> w*1000
console.log(arrow_function(1))