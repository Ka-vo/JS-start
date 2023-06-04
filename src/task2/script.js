document.querySelector("#consoleLog").addEventListener("click", () => {
  console.log("Метод для вывода сообщения пользователю в конcоль");
});

document.querySelector("#alert").addEventListener("click", () => {
  alert(
    "Метод для вывода сообщения пользователю. Страница заблокирована до тех пор, пока пользователь не нажмет кнопку - ОК"
  );
});

document.querySelector("#prompt").addEventListener("click", () => {
  prompt("Метод для взаимодействия с пользователем");
});
