let allBoldItems = [];


function getBoldItems() {
  allBoldItems = Array.from(document.getElementsByTagName("strong"));
}


function highlight() {
  allBoldItems.forEach(item => {
    item.style.color = "blue";
  });
}


function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = "black";
  });
}


getBoldItems();



document.getElementsByTagName("p")[0].addEventListener("mouseover", highlight);
document.getElementsByTagName("p")[0].addEventListener("mouseout", returnItemsToDefault);
