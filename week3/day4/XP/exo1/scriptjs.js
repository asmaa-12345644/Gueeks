article=document.querySelector("article")
console.log(article.firstElementChild)

article.removeChild(article.lastElementChild)

document.getElementsByTagName("h2")[0].addEventListener("click",(event)=>{
   event.target.style.backgroundColor="red"
})

document.querySelector("h3").addEventListener("click",(event)=>{
    event.target.style.display="none";
})

button=document.createElement("button")
button.textContent="Cliquez moi"

document.body.appendChild(button)

button.addEventListener("click",()=>{
    document.querySelectorAll(p).forEach(e=>e.style.fontWeight="bold")

})

//bonus
article.firstElementChild.addEventListener("mouseover",function(){
     this.style.fontSize=Math.floor(Math.random()*101)+"px"

})

//bonus

document.querySelectorAll("p")[1].addEventListener("mouseover", function () {
  this.classList.add("fade");
});