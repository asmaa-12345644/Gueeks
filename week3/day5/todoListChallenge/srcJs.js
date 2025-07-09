const tasks = [];

const user = document.getElementById("nom");
const liste = document.querySelector(".listTasks");

function addTask(e) {
    e.preventDefault(); 

    if (user.value.trim() === "") {
        alert("Remplir le champ svp");
        return;
    }

    tasks.push(user.value.trim());

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = user.value;

 
    const button = document.createElement("button");
    button.className = "close-btn";
    button.innerHTML = '<i class="fas fa-times"></i>';

    
    button.addEventListener("click", () => {
        liste.removeChild(taskDiv);
    });
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            label.style.color = "red";
            label.style.textDecoration = "line-through";
        } else {
            label.style.color = "";
            label.style.textDecoration = "";
        }
    });

    taskDiv.appendChild(button);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
   

    liste.appendChild(taskDiv);

     user.value = "";
}


document.getElementById("btn").addEventListener("click", addTask);
