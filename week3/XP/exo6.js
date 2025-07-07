const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }

let res=[]
for(let key in details){
    res.push(`${key} ${details[key]}`)
}
console.log(res.join(" "))