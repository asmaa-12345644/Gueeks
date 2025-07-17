function anagram(chaine1, chaine2) {
    const str1 = chaine1.replace(/\s/g, "").toLowerCase().split("");
    const str2 = chaine2.replace(/\s/g, "").toLowerCase().split("");
    return str1.sort().join("") === str2.sort().join("")
}
s1="Hello"
s2="Hole"
if (anagram(s1, s2)) {
    console.log(`${s1} is an anagram of ${s2}`);
} else {
    console.log(`${s1} is not an anagram of ${s2}`);
}



