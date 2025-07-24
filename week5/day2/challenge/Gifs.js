const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const container = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const keyword = input.value.trim();

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${keyword}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    if (!response.ok)
         throw new Error("Erreur lors de la récupération du GIF");
    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;


    const div = document.createElement("div");
    const img = document.createElement("img");
    const delBtn = document.createElement("button");

    img.src = gifUrl;
    img.alt = keyword;
    delBtn.innerHTML = "DELETE";
    delBtn.style.marginLeft = "10px";


    delBtn.addEventListener("click", () => {
      div.remove();
    });

    div.appendChild(img);
    div.appendChild(delBtn);
    container.appendChild(div);

  } catch (err) {
    alert("Error:", err);
  }

  input.value = "";
});

deleteAllBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
