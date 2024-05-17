// ! Practice - Add Products To Page
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let showCount = 5;
let models = [2020, 2021];
document.write(`<h1>Show ${showCount} Products.</h1>`);
for (let i = 0; i < showCount; i++) {
	document.write(`<div>`);
	document.write(`<h3>${i + 1}- ${products[i]}</h3>`);
	for (let j = 0; j < colors.length; j++) {
		// document.write(`<p>${colors[j]}</p>`)
	}
	document.write(`<p>${colors.join(" | ")}</p>`);

	document.write(`</div>`);
}
// ! Assignment 01
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += start) {
	if (i === exclude) continue;
	console.log([i].join());
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
