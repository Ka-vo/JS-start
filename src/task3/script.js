//Код написанный самостоятельно. РАБОЧИЙ.
// let counter = 0;
// document.querySelector(".traffic-light").addEventListener("click", function () {
//   counter = counter + 1;
//   if (counter === 1) {
//     this.style.background = "green";
//   } else if (counter === 2) {
//     this.style.background = "yellow";
//   } else if (counter === 3) {
//     this.style.background = "red";
//     counter = 0;
//   }
// });

const trafficLightEl = document.querySelector(".traffic-light"); //Находим элемент по классу
trafficLightEl.addEventListener("click", makeGreen); //Прослушиваем событие "Клик" на найденном элементе, вызываем ссылку на функцию для преобразования цвета в зеленый

function makeGreen() {
  //функция преобразования цвета в зеленый
  trafficLightEl.style.background = "green"; //изменение цвета фона на зеленый
  trafficLightEl.removeEventListener("click", makeGreen); //удаление прослушивания события
  trafficLightEl.addEventListener("click", makeYellow); //Вызов функции для преобразования цвета в желтый.
}

function makeYellow() {
  trafficLightEl.style.background = "yellow";
  trafficLightEl.removeEventListener("click", makeYellow);
  trafficLightEl.addEventListener("click", makeRed);
}

function makeRed() {
  trafficLightEl.style.background = "red";
  trafficLightEl.removeEventListener("click", makeRed);
  trafficLightEl.addEventListener("click", makeGreen);
}
