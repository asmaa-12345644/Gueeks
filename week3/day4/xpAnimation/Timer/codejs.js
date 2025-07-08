setTimeout(function(){
    alert("Hello World")
},2000)

//PART ||
setTimeout(()=>{
          div=document.getElementById("container")

          p=document.createElement("p")
          p.textContent="Hello World"
          
          div.appendChild(p)
},2000)

//PART |||
let timer = setInterval(()=>{
    div=document.getElementById("container")

    p=document.createElement("p")
    p.textContent="Hello World"
    
    div.appendChild(p)

    if(div.getElementByTagName("p").length>=5)
         clearInterval(timer)

},2000)

