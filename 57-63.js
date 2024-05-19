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
		//$ for (let s = 0; s < skills.length; s++) {
		//$ 	document.write(`<p>${skills[s]}</p>`);
		//$ }
	} else if (skills.length > 0) {
		document.write("Skills are Hidden!");
	} else {
		document.write("Skills are Hidden,<br> No skills listed!");
	}
	document.write(`</div>`);
}
showInfo("Salma", 20, 50, "Yes", "Html", "CSS", "JS");

//! Random Argument Challenge is Assignment 04
//? name = string - age = number - status = boolean
function showDetails(a, b, c) {
	let name;
	let age;
	let status;
	if (typeof a === "string") {
		name = a;
	} else if (typeof b === "string") {
		name = b;
	} else {
		name = c;
	}
	if (typeof a === "number") {
		age = a;
	} else if (typeof b === "number") {
		age = b;
	} else {
		age = c;
	}
	if (typeof a === "boolean") {
		status = a;
	} else if (typeof b === "boolean") {
		status = b;
	} else {
		status = c;
	}
	status = status ? (status = "Available") : (status = "Not Available");
	document.write(
		`<h4>Hello ${name} your age is ${age}, You are ${status} for hire</h4>`
	);
}
//$ Output
showDetails(3, "H", true);
showDetails("M", 20, false);
showDetails(20, false, "X");
showDetails("K", true, 15);
//* Hello "Name" your age is "Age", You are Available/ Not Availablee for hire
//! Solution2
// function showDetails(a, b, c) {
//     // وضع القيم في مصفوفة
//     let args = [a, b, c];

//     let name = "Unknown";
//     let age = "Unknown";
//     let status = false;

//     // التحقق من كل عنصر في المصفوفة وتعيين القيم المناسبة
//     for (let i = 0; i < args.length; i++) {
//       if (typeof args[i] === "string") {
//         name = args[i];
//       } else if (typeof args[i] === "number") {
//         age = args[i];
//       } else if (typeof args[i] === "boolean") {
//         status = args[i];
//       }
//     }

//     // تحويل الحالة إلى نص
//     status = status ? "Available" : "Not Available";

//     // عرض النتيجة
//     document.write(`Hello ${name}, your age is ${age}, You are ${status} for hire<br>`);
//   }
//! Assignment 01
function sayHello(theName, theGender = "") {
	if (theGender === "Female") {
		document.write(`<p>Hello Miss ${theName}</p>`);
	} else if (theGender === "Male") {
		document.write(`<p>Hello Mr ${theName}</p>`);
	} else {
		document.write(`<p>Hello ${theName}</p>`);
	}
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
//! Assignment 02
function calculate(firstNum, secondNum, operation) {
	if (typeof secondNum !== "number") {
		return "Second Number is Not Found";
	}
	switch (operation) {
		case "add":
			return firstNum + secondNum;
		case "subtract":
			return firstNum - secondNum;
		case "multiply":
			return firstNum * secondNum;
		default:
			return firstNum + secondNum;
	}
}

console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600

//! Assignment 03
function ageInTime(theAge) {
	if (theAge < 10 || theAge > 100) {
		document.write("Age Out of Range", `<hr>`);
	} else {
		document.write(`Your Age is: ${theAge * 12} Months<br>`);
		document.write(`Your Age is: ${theAge * 52} Weeks<br>`);
		document.write(`Your Age is: ${theAge * 365} Days<br>`);
		document.write(`Your Age is: ${theAge * 8760} Hours<br>`);
		document.write(`Your Age is: ${theAge * 525600} Minutes<br>`);
		document.write(`Your Age is: ${theAge * 31536000} Seconds<br>`);
	}
}

// Needed Output
ageInTime(1); // Age Out Of Range
ageInTime(110); // Months Example => 456 Months
ageInTime(50); // Months Example => 456 Months
//$ 1 year = 12 months
//$ 1 year = 52 weeks
//$ 1 year = 365 days
//$ 1 year = 8760 hours
//$ 1 year = 525600 minutes
//$ 1 year = 31536000 seconds
//! Assignment 05
function createSelectBox(startYear, endYear) {
	document.write(`<select>`);
	for (i = startYear; i <= endYear; i++) {
		document.write(`<option value=${i}>${i}</option>`);
	}
	document.write(`</select>`);
}
createSelectBox(2000, 2021);
//! Assignment 06
function multiply(...Numbers) {
	let operation = 1;
	for (let i = 0; i < Numbers.length; i++) {
		if (typeof Numbers[i] === "string") {
			continue;
		}
		Numbers[i] = Math.trunc(Numbers[i]);
		operation *= Numbers[i];
	}
	return `Final result is ${operation}`;
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
