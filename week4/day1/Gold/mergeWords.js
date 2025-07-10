function mergeWords(word) {
    let sentence = word
    function inner(next) {
      if (next === undefined) {
        return sentence;
      }
      sentence += " " + next;
      return inner;
    }
  
    return inner;
}
  
console.log(mergeWords('There')('is')('no')('spoon.')());  


const mergeWords = (string) => (nextString) => nextString === undefined ? string : mergeWords(`${string} ${nextString}`);
  


