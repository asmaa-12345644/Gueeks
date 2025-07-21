const compareToTen=(n)=>{
    return new Promise((resolve,reject)=>{
        if(n<=10)
            resolve(`${n} is less or equal to 10`)
        else
            reject(`${n} is greater than 10`)
    })
}
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))