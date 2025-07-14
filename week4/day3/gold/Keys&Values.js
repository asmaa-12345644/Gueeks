
function keysAndValues(obj){
   return [Object.keys(obj).sort(),Object.values(obj).sort()];
}



console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))
