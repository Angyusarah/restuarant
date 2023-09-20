let imageChanger = document.getElementById("image");
let images = [
    "images/spaghetti.jpeg",
  "images/burger.jpeg",
  "images/mojito.jpeg",
  "images/pancake.jpeg",
  "images/fruit.jpg",
  "images/chocolate.jpg",
  "images/fried rice.jpg",
  "images/suya.jpg",
  "images/waffles.jpeg",
  "images/nigerian breakfast.jpeg",
  "images/english breakfast.jpeg",
  "images/sex-on-the-beach.jpg"
];
let counter = 0;

function imageChange() {
  if (counter >= images.length) {
    counter = 0;
  }

  imageChanger.setAttribute("src", images[counter]);
  counter++;
}

setInterval(imageChange, 1500);
