let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;
while (index < products.length) {
	console.log(products[index]);
	index++;
}
// !Challenge
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Sameera"];
let myEmployees = [
	"Amgad",
	"Samah",
	"Ameer",
	"Omar",
	"Amany",
	"Samia",
	"Omnya",
];
let adminCount = 0;
for (let i = 0; i < myAdmins.length; i++) {
	if (myAdmins[i] === "Stop") {
		break;
	}
	adminCount++;
}
document.write(`<div>We have ${adminCount} Admins`);

for (let i = 0; i < myAdmins.length; i++) {
	if (myAdmins[i] === "Stop") {
		break;
	}
	document.write(`<hr><h3>The Admin for Team ${i + 1} is ${myAdmins[i]}</h3>`);
	document.write(`<h4>Team Members:</h4>`);
	let employeeCount = 0;
	for (let j = 0; j < myEmployees.length; j++) {
		if (myEmployees[j][0] === myAdmins[i][0]) {
			employeeCount++;
			document.write(`<p>${employeeCount} - ${myEmployees[j]}</p>`);
		}
	}
}
// ! Assignment 01
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indexx = 0;
let counter = 0;
while (indexx < friends.length) {
	if (
		typeof friends[indexx] === "string" &&
		!friends[indexx].startsWith("A") &&
		!friends[indexx].startsWith("a")
	) {
		counter++;
		document.write(`${counter} => ${friends[indexx]}<br>`);
	}
	indexx++;
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"
