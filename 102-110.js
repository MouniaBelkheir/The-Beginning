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
// let message = prompt("Print Number From – To", "Example: 5-20");
// let number = message.includes("Example:")
// 	? message.split(":")[1].split("-")
// 	: message.split("-");
// console.log(number);
// let firstNum = Number(number[0]);
// let secondNum = Number(number[1]);
// let [first, second] =
// 	firstNum < secondNum ? [firstNum, secondNum] : [secondNum, firstNum];
// for (let i = first; i <= second; i++) {
// 	console.log(i);
// 	let div = document.createElement("div");
// 	div.innerHTML = i;
// 	document.body.appendChild(div);
// }
// ! Assignment 2
// setTimeout(popUp, 5000);
// function popUp() {
// 	let div = document.createElement("div");
// 	let h2 = document.createElement("h2");
// 	let p = document.createElement("p");
// 	document.body.prepend(div);
// 	div.appendChild(h2);
// 	div.appendChild(p);
// 	h2.textContent = "Welcome";
// 	p.textContent = "Welcome to Elzero Web school";
// 	div.style.cssText =
// 		"width:600px; display:flex; flex-direction:column; align-items:center;justify-content:center; background-color:#f5f3f4; position: absolute; top:50%; left:50%; transform:translate(-50% , -50%);border: 2px solid #e3e1e2; border-radius: 3px; font-family:Arial";
// 	h2.style.cssText = "font-size:large; font-weight: bold;margin: 3px;";
// 	p.style.cssText = "font-size:medium; margin: 5px; ";
// 	let button = document.createElement("button");
// 	button.setAttribute("type", "button");
// 	button.textContent = "X";
// 	div.appendChild(button);
// 	button.style.cssText =
// 		"width:45px; height:45px; font-size:24px; color:white; background-color: red; border:none; border-radius:50%; position:absolute; top:-20px; right:-20px; cursor:pointer";
// 	button.addEventListener("click", () => div.remove());
// }
// ! Assignment 3
let div = document.createElement("div");
document.body.prepend(div);
div.textContent = 10;
function count() {
	div.innerHTML -= 1;
	if (div.innerHTML === "0") {
		clearInterval(counter);
	}
}
let counter = setInterval(count, 1000);
