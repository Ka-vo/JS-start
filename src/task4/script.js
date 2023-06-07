let oldText = document.querySelector("#button");
oldText.addEventListener("click", (event) => {
  event.preventDefault();
  oldText.textContent = prompt("Введите текст для изменения");
});
