const button = document.getElementById("button");
const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const genderEl = document.getElementById("gender");
const birthYearEl = document.getElementById("birth-year");
const homeWorldEl = document.getElementById("home-world");


button.addEventListener("click", async () => {
  nameEl.innerHTML = `<i class="fa fa-spinner fa-spin"></i> Loading...`;
  heightEl.textContent = "";
  genderEl.textContent = "";
  birthYearEl.textContent = "";
  homeWorldEl.textContent = "";

  const randomId = Math.floor(Math.random() * 83) + 1; 

  try {
    const res = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!res.ok) 
        throw new Error("Character not found.");
    const data = await res.json();
    const character = data.result.properties;

    const worldRes = await fetch(character.homeworld);
    if (!worldRes.ok) 
        throw new Error("Homeworld not found.");
    const worldData = await worldRes.json();
    const homeWorld = worldData.result.properties.name;


    nameEl.textContent = character.name;
    heightEl.textContent = `Height: ${character.height} cm`;
    genderEl.textContent = `Gender: ${character.gender}`;
    birthYearEl.textContent = `Birth Year: ${character.birth_year}`;
    homeWorldEl.textContent = `Home World: ${homeWorld}`;

  } catch (err) {
    nameEl.innerHTML = `<i class="fa fa-exclamation-triangle" style="color:red;"></i> Error`;
    heightEl.textContent = err.message;
    genderEl.textContent = "";
    birthYearEl.textContent = "";
    homeWorldEl.textContent = "";
  }
});
