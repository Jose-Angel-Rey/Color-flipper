"use strict";

const btn = document.getElementById("btn");
const color = document.getElementById("color");
const bodyElement = document.body;

function randomNumber() {
  return Math.floor(Math.random() * 101);
}
function hueValue() {
  return Math.floor(Math.random() * 361);
}

btn.addEventListener("click", () => {
  let hue = hueValue();
  let saturation = randomNumber();
  let lightness = randomNumber();

  color.textContent = `hsl(${hue},${saturation}%,${lightness}%)`;
  bodyElement.style.backgroundColor = color.textContent;
});
