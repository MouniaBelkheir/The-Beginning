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

// Count the number of valid admins before displaying anything
for (let i = 0; i < myAdmins.length; i++) {
	if (myAdmins[i] === "Stop") {
		break;
	}
	adminCount++;
}
// Display the number of admins at the top
document.write(`<div>We have ${adminCount} Admins</div>`);
// Display each admin and their corresponding team members
for (let i = 0; i < myAdmins.length; i++) {
	if (myAdmins[i] === "Stop") {
		break;
	}
	document.write(`<hr><h4>The Admin for team ${i + 1} is ${myAdmins[i]}</h4>`);
	document.write(`<h3>Team Members:</h3>`);
	let memberCount = 0;
	for (let j = 0; j < myEmployees.length; j++) {
		if (myEmployees[j][0] === myAdmins[i][0]) {
			memberCount++;
			document.write(`<p>${memberCount} - ${myEmployees[j]}</p>`);
		}
	}
}
