const images = document.getElementsByTagName("img");
for (let image of images) {
  image.style.opacity = "0";
  image.onload = fadeImg;
}

function fadeImg () {
  this.style.transition = "opacity 5s"; // set the transition time here
  this.style.opacity = "1";
}