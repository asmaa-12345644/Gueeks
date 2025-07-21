const makeAllCaps=(array)=>{
        return new Promise((resolve,reject)=>{
            if(array.every(element=>typeof element==="string")){
                const majuscule=array.map(e=>e.toUpperCase())
                resolve(majuscule)
            }
            else
                 reject("The words in the array are not all strings")
        })
}

const sortWords=(arr)=>{
     return new Promise((resolve,reject)=>{
        if(arr.length>4)
            resolve(arr.sort())
        else
            reject("The array length is less than 4")
     })

}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) 
      .catch(error => console.log(error))