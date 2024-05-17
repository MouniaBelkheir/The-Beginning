// // ! Practice - Add Products To Page
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let showCount = 5;
// let models = [2020, 2021];
// document.write(`<h1>Show ${showCount} Products.</h1>`);
// for (let i = 0; i < showCount; i++) {
// 	document.write(`<div>`);
// 	document.write(`<h3>${i + 1}- ${products[i]}</h3>`);
// 	for (let j = 0; j < colors.length; j++) {
// 		// document.write(`<p>${colors[j]}</p>`)
// 	}
// 	document.write(`<p>${colors.join(" | ")}</p>`);

// 	document.write(`</div>`);
// }
// // ! Assignment 01
// let start = 10;
// let end = 100;
// let exclude = 40;
// for (let i = start; i <= end; i += start) {
// 	if (i === exclude) continue;
// 	console.log([i].join());
// }
// // Output
// // 10 20 30 50 60 70 80 90  100
// // ! Assignment 02
// let startt = 10;
// let endd = 0;
// let stop = 3;
// for (let j = startt; j >= endd; j--) {
// 	j >= start ? console.log(j) : console.log(`${endd}${j}`);
// 	if (j === stop) {
// 		break;
// 	}
// }
// // Output
// // 10  09  08 07 06 05 04 03
// // ! Assignment 03
// let start_ = 1;
// let end_ = 6;
// let breaker = 2;
// for (let h = start_; h <= end_; h++) {
// 	console.log(h);
// 	for (let x = breaker; x < end_; x += breaker) {
// 		console.log("--", x);
// 	}
// }
// // ! Assignment 04
// let index = 10; //$ first condition
// let jump = 2;
// for (;;) {
// 	// Write Your Code Here
// 	console.log(index);
// 	index -= jump; //$ third condition
// 	if (index < jump + jump) break; //$ second condition
// }
// //* Another solution
// // $for (;;) {
// // $  let i = index;
// // $  console.log(i);
// // $  index -= jump;
// // $  if (index < 4) break;
// // $}
// ! Assignment 05
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for (let q = letter.length - letter.length; q < friends.length; q++) {
	if (friends[q][letter.length - letter.length].toLowerCase() === letter)
		continue;
	console.log(" => " + friends[q]);
}
// Output //$ when "A", continue=> no "A"
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
// ! Assignment 06
let start = 0;
let swappedName = "elZerO";

for (let b = start; b < swappedName.length; b++) {
	swappedName[b] === swappedName[b].toUpperCase()
		? swappedName[b].toLowerCase()
		: swappedName[b].toUpperCase();
}
console.log(result);
// Output
// $"ELzERo"
