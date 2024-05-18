// ! Lesson
// function sayHello(userName, age) {
// 	age >= 20
// 		? console.log(`Hello ${userName}, Welcome to the Game!`)
// 		: console.log(
// 				`Hey ${userName}, App is not suitable for you, come back after ${
// 					20 - age
// 				}`
// 		  );
// }
// sayHello("Mounia", 20);

function generateYears(start, end, exlude) {
	for (let i = start; i <= end; i++) {
		console.log(i);
		if (i === exlude) {
			continue;
		}
	}
}
generateYears(2, 6, 5);
console.log("%c###############", "color:tan");

// $ rest parameter (...)
function calc(...numbers) {
	let addition = 0;
	for (let i = 0; i < numbers.length; i++) {
		addition += numbers[i];
	}
	return `Final result is ${addition}`;
}
console.log(calc(2, 3, 5, 2));
//! Practice
function showInfo(
	user = "Unknown",
	age = "Unknown",
	rate = 0,
	showSkills = "Yes",
	...skills
) {
	document.write(`<div>`);
	document.write(`<h3>Welcome ${user}</h3>`);
	document.write(`<p>Age: ${age}</p>`);
	document.write(`<p>Hour Price: $${rate}</p>`);
	document.write(`<h4>Skills:</h4>`);
	if (showSkills === "Yes") {
		document.write(`<p>${skills.join(" | ")}</p>`);
		if (skills.length === 0) {
			document.write("No Skills added!");
		}
		// for (let s = 0; s < skills.length; s++) {
		// 	document.write(`<p>${skills[s]}</p>`);
		// }
	} else if (skills.length > 0) {
		document.write("Skills are Hidden!");
	} else {
		document.write("Skills are Hidden, in fact, there are no skills listed!");
	}
	document.write(`</div>`);
}
showInfo("Salma", 20, 50, "Yes", "Html", "CSS", "JS");
