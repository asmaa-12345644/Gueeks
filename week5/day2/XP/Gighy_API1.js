fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
  .then(response => {
    if(response.ok){
        return response.json()
    } else {
        throw new Error("Network response was not ok");
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
