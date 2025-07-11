function string_chop(chaine, nbr) {
    const array = [];
    for (let i = 0; i < chaine.length; i += nbr) {
        array.push(chaine.slice(i, i + nbr));
    }
    return array;
}

console.log(string_chop('developers',2)); 
