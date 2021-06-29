"use strict";

const btn = document.getElementById("btn");
const color = document.getElementById("color");
const bodyElement = document.body;

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

btn.addEventListener("click", () => {
  let red = randomNumber();
  let green = randomNumber();
  let blue = randomNumber();

  color.textContent = `rgb(${red},${green},${blue})`;
  bodyElement.style.backgroundColor = color.textContent;
});
