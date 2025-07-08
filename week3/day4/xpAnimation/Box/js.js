function myMove() {
    const box = document.getElementById("animate");
    let pos = 0; 
    const limit = 400 - 50; 
  
    const intervalId = setInterval(() => {
      if (pos >= limit) {
        clearInterval(intervalId); 
      } else {
        pos++;
        box.style.left = pos + "px";
      }
    }, 1); 
  }
  