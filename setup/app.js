const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "SAISREERAM PATIBANDLA" ;
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});

const name2 = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "Hey!";
});

const changeText = document.body.querySelector("#change-text");
changeText.addEventListener("click", () => {
  story.textContent = "HELLO ";
});
