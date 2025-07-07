div=document.getElementById("container")
console.log(div.textContent)
ul=document.querySelectorAll('.list')
ul[0].lastElementChild.textContent="Richard"

ul[1].removeChild(ul[1].children[1])

ul.forEach(e=> { e.firstElementChild.textContent="Asmaa"});


ul.forEach(e => e.classList.add('student_list'));
ul[0].classList.add('university','attendance')

div.style.backgroundColor = "lightblue";
div.style.padding = "5px";



const danLi = ul[1].lastElementChild;
if (danLi.textContent.trim() === "Dan") {
  danLi.style.display = "none";
}

const richardLi = ul[0].children[1];
if (richardLi.textContent.trim() === "Richard") {
  richardLi.style.border = "1px solid black";
}

document.body.style.fontSize = "20px";

//bonus

if (div.style.backgroundColor === "lightblue") {
    const names = [];
    ul[0].querySelectorAll("li").forEach(li => {
      names.push(li.textContent.trim());
    });
    alert(`Hello ${names[0]} and ${names[1]}`);
  }