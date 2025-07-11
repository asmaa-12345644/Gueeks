sample_Array = [NaN, 0, 15, false, -22, '',undefined, 47, null]

const newArray = sample_Array.filter((element) => 
    typeof element=="number" && element!=0 && !isNaN(element) )
console.log(newArray);