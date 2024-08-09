//! setInterval and clearInterval
// let div = document.querySelector("div");
// function count() {
// 	div.innerHTML -= 1;
// 	if (div.innerHTML === "0") {
// 		clearInterval(counter);
// 	}
// }
// let counter = setInterval(count, 1000);
// ! Assignment 1
let message = prompt("Print Number From – To", "Example: 5-20");
let number = message.includes("Example:")
	? message.split(":")[1].split("-")
	: message.split("-");
console.log(number);
let firstNum = Number(number[0]);
let secondNum = Number(number[1]);
let [first, second] =
	firstNum < secondNum ? [firstNum, secondNum] : [secondNum, firstNum];
for (let i = first; i <= second; i++) {
	console.log(i);
	let div = document.createElement("div");
	div.innerHTML = i;
	document.body.appendChild(div);
}
