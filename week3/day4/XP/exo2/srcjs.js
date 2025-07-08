form = document.querySelector("form");
console.log(form);

console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));
console.log(document.getElementById("submit"));

console.log(document.getElementsByName("firstname"));
console.log(document.getElementsByName("lastname"));

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  Array.from(document.getElementsByTagName("input")).forEach(element => {
    if (element.value !== "" && element.type !== "submit") {
      console.log(element.value);
      let li = document.createElement("li");
      li.textContent = element.value; 

      document.getElementsByClassName("usersAnswer")[0].appendChild(li);
    }
  });
});
