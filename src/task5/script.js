let textForm = document.querySelector("#textForm");

textForm.addEventListener("input", () => {
  let textParagraph = document.querySelector("#duplicateField");
  textParagraph.textContent = textForm.value;
});

document.querySelector("#form").addEventListener("submit", (event) => {
  console.log(textForm.value);
  event.preventDefault();
  let textParagraphNew = document.querySelector("#duplicateField");
  textParagraphNew.textContent = "";
  let textFormNew = document.querySelector("#textForm");
  textFormNew.value = "";
});
