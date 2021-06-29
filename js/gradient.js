"use strict";
const btn = document.getElementById("btn");
const firstColor = document.getElementById("firstColor");
const secondColor = document.getElementById("secondColor");
const bodyElement = document.body;
const hexCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", ];

function randomNumber() {
	return Math.floor(Math.random() * 16);
}

btn.addEventListener("click", () => {
	let hexColorOne = "";
	let hexColorTwo = "";

	for (let i = 0; i < 6; i++) {
		hexColorOne += hexCode[randomNumber()];
		hexColorTwo += hexCode[randomNumber()];
	}
  
	firstColor.textContent = `#${hexColorOne}`;
	secondColor.textContent = `#${hexColorTwo}`;
	const gradient = `linear-gradient(#${hexColorOne}, #${hexColorTwo})`;
	bodyElement.style.backgroundImage = gradient;
});