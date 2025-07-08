noun=document.getElementById("noun")
adj=document.getElementById("adjective")
person=document.getElementById("person")
verb=document.getElementById("verb")
place=document.getElementById("place")

document.getElementById("lib-button").addEventListener("click",(event)=>{
    event.preventDefault()
    if(noun.value!="" && adj.value!="" && person.value!="" && verb.value!="" && place.value!=""){
        span=document.getElementById("story")
        story=`The ${person.value} is ${adj.value} and  who ${verb.value} to a ${noun.value} ${place.value}`
        span.textContent=story
    }
    else{
        console.error("Saisir bien les champs ")
    }

})


//bonus

const templates = [
 "The {person} is {adj} and loves to {verb} with a {noun} at {place}.",
 "Once upon a time in {place}, there was a {adj} {noun}. {person} decided to {verb} it.",
 "{person} went to {place} and brought a {adj} {noun} to {verb}.",
 "A {adj} {noun} was found in {place} by {person}, who then started to {verb}.",
];


function fillTemplate(template, values) {
    return template.replace("{noun}", values.noun).replace("{adj}", values.adj).replace("{person}", values.person).replace("{verb}", values.verb).replace("{place}", values.place);
  }
  

  document.getElementById("shuffle-button").addEventListener("click", () => {
    const values = {
      noun: noun.value,
      adj: adj.value,
      person: person.value,
      verb: verb.value,
      place: place.value,
    };
  
    if (Object.values(values).some(v => v === "")) {
      alert("Remplis tous les champs avant de mélanger !");
      return;
    }
  

    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  

    const story = fillTemplate(randomTemplate, values);
    document.getElementById("story").textContent = story;
  });
  



















