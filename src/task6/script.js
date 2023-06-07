const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");
const red = document.querySelector("#red");

green.addEventListener("click", makeGreen);
yellow.addEventListener("click", makeGreen);
red.addEventListener("click", makeGreen);

function makeGreen() {
  green.style.background = "green";
  yellow.style.background = "black";
  red.style.background = "black";

  green.removeEventListener("click", makeGreen);
  yellow.removeEventListener("click", makeGreen);
  red.removeEventListener("click", makeGreen);

  green.addEventListener("click", makeYellow);
  yellow.addEventListener("click", makeYellow);
  red.addEventListener("click", makeYellow);
}

function makeYellow() {
  green.style.background = "black";
  yellow.style.background = "yellow";
  red.style.background = "black";

  green.removeEventListener("click", makeYellow);
  yellow.removeEventListener("click", makeYellow);
  red.removeEventListener("click", makeYellow);

  green.addEventListener("click", makeRed);
  yellow.addEventListener("click", makeRed);
  red.addEventListener("click", makeRed);
}

function makeRed() {
  green.style.background = "black";
  yellow.style.background = "black";
  red.style.background = "red";

  green.removeEventListener("click", makeRed);
  yellow.removeEventListener("click", makeRed);
  red.removeEventListener("click", makeRed);

  green.addEventListener("click", makeGreen);
  yellow.addEventListener("click", makeGreen);
  red.addEventListener("click", makeGreen);
}
