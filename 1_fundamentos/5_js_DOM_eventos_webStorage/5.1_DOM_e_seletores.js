let fundoVerde = document.getElementById("header-container");
fundoVerde.style.backgroundColor = "green";

let fundoRosa = (document.getElementsByClassName(
  "emergency-tasks"
)[0].style.backgroundColor = "pink");

// let fundoAmarelo = (document.getElementsByClassName(
//   "no-emergency-tasks"
// )[0].style.backgroundColor = "yellow");
const fundoAmarelo = (document.querySelectorAll(
  "#container .no-emergency-tasks"
)[0].style.backgroundColor = "yellow");

const mudaH3 = document.getElementsByTagName("h3");
for (index = 0; index < mudaH3.length; index += 1) {
  mudaH3[index].style.backgroundColor = "black";
}
