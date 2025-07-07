colors=["Black","Rose","Blue","Orange","Green"];

for(i in colors){
    console.log(`My #${i+1} choice is ${colors[i]}`);
}

//bonus

let res=[];
for(i=0;i<colors.length;i++){
    let suffixe;
    if(i+1===1)
        suffixe="st";
    else if(i+1===2)
        suffixe="nd";
    else if(i+1==3)
        suffixe="rd";
    else 
        suffixe="th";

    res.push(`My ${i+1}${suffixe} choice is ${colors[i]}`);
}
console.log(res.join(","));