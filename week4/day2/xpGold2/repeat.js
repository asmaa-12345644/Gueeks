function repeat(chaine,n){
    s=""
    if(n>=2){
       for(let i=0;i<n;i++)
           s+=chaine
        return s
    }else if(n==1){
        return chaine
    }

}

console.log(repeat('Ha!',3));