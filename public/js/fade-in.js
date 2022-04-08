const images = document.getElementsByTagName("img");
for (let image of images) {
  image.addEventListener("load", fadeImg);
  image.style.opacity = "0";
}

function fadeImg () {
  this.style.transition = "opacity 5s"; // set the transition time here
  this.style.opacity = "1";
}