//! Lessons
let my = [1, 2, "Ahmad", "Mazero", "Elhem", "Osama", "Gamal", "Ameer"];
let string = [];
let number = [];
for (i = 0; i < my.length; i++) {
	if (typeof my[i] === "string") {
		string.push(my[i]);
	} else if (typeof my[i] === "number") {
		number.push(my[i]);
	}
}
console.log(string, number);
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];
for (let i = 0; i < products.length; i++) {
	console.log("%cProduct:", "color: red ;font-size:25px");
	console.log("%c" + products[i], "color: rebeccapurple ;font-size: 22px");
	console.log("%cColors:", "color: green ; font-size:20px");
	for (let j = 0; j < colors.length; j++) {
		console.log(`* ${colors[j]}`);
	}
	console.log("%cModels:", "color: blue ;font-size:20px");
	for (let h = 0; h < models.length; h++) {
		console.log(`- ${models[h]}`);
	}
}
