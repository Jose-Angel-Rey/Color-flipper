"use strict";

const btn = document.getElementById("btn");
const color = document.getElementById("color");
const bodyElement = document.body;

const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

console.log(hexCode, hexCode.length)

function randomNumber() {
  return Math.floor(Math.random() * 149);
}

btn.addEventListener("click", () => {
  color.textContent = colorNames[randomNumber()];
  bodyElement.style.backgroundColor = color.textContent;
});
