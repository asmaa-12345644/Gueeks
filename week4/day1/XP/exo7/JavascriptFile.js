(function (user){
    div=document.createElement("div")

    div.innerHTML=`Welcome ${user}`
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "30px";


    img=document.createElement("img")
    img.src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
    img.alt="Sorry, no image found"
    img.style.borderRadius="50%"
    img.style.width="60px"
    img.style.height="60px"

    div.appendChild(img)

    document.getElementById("navbar").appendChild(div)

})("Asmaa");