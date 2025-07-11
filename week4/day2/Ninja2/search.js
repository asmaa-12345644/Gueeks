function search_word(string,word){
    let nbr = 0
    const words = string.split(" ");
     for(w of words){
        if(w==word){
            nbr+=1
        }
     }
     return `'${word}' was found ${nbr} times.`
}
console.log(search_word('The quick brown fox', 'fox')); 