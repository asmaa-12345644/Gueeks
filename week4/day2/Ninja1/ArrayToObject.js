const letters = ['x', 'y', 'z', 'z'];
const output={}

for(let i=0; i<letters.length; i++){
    if(output.hasOwnProperty(letters[i]))
        output[letters[i]]+=1
    else
        output[letters[i]]=1
}
console.log(output); 

// 2
const Output = letters.reduce((acc, letter) => {
    if (acc[letter]) {
      acc[letter]++;
    } else {
      acc[letter] = 1;
    }
    return acc;
  }, {});
  console.log(Output);