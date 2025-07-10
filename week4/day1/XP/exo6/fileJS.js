(function (nbrChildren,partnerName,geographic,job){
      const div=document.querySelector("div")
      div.innerHTML=`You will be a ${job} in ${geographic}, and married to ${partnerName} with ${nbrChildren} kids.`
})(3, "John", "Paris", "Engineer");