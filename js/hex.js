"use strict";
const btn = document.getElementById("btn");
const color = document.getElementById("color");
const bodyElement = document.body;
const hexCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", ];

function randomNumber() {
	return Math.floor(Math.random() * 16);
}

btn.addEventListener("click", () => {
	let hexColor = "";

	for (let i = 0; i < 6; i++) {
		hexColor += hexCode[randomNumber()];
	}
  
	color.textContent = `#${hexColor}`;
	bodyElement.style.backgroundColor = color.textContent;
});