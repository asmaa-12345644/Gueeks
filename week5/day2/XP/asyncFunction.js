const asyncFct= async ()=>{
    try{     
      const reponse= await fetch("https://www.swapi.tech/api/starships/9/")
      if(reponse.ok){
            const data=await reponse.json()
            console.log(data.result)
     }
     else
        throw new Error("Something is Wrong check Your Code again")
    }
    catch(err){
        console.log(err)
    }

}


asyncFct()
