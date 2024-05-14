//! Switch and if Challenge
let job = "Designer";
let salary = 6000;
if (job === "Manager") {
	salary = 8000;
} else if (job === "IT" || job === "Support") {
	salary = 6000;
} else if (job === "Developer" || job === "Designer") {
	salary = 7000;
} else {
	salary = 4000;
}
//$ Switch
switch (job) {
	case "Manager":
		salary = 8000;
		console.log(`The Salary of a ${job} is ${salary}`);
		break;
	case "IT":
	case "Support":
		salary = 6000;
		console.log(`The Salary of a ${job} is ${salary}`);
		break;
	case "Developer":
	case "Designer":
		salary = 7000;
		console.log(`The Salary oF a ${job} is ${salary}`);
		break;
	default:
		salary = 4000;
		console.log(`The Salary is ${salary}`);
}
//$ If
let holiday = 6;
let money = 0;
switch (holiday) {
	case 0:
		money = 5000;
		console.log(`My money is ${money}`);
		break;
	case 1:
	case 2:
		money = 3000;
		console.log(`My money is ${money}`);
		break;
	case 3:
		money = 2000;
		console.log(`My money is ${money}`);
		break;
	case 4:
		money = 1000;
		console.log(`My money is ${money}`);
		break;
	case 5:
		money = 0;
		console.log(`My money is ${money}`);
		break;
	default:
		money = 0;
		console.log(`My money is ${money}`);
}
if ((holiday === 0)) {
	money = 5000;
	console.log(`My money is ${money}`);
} else if ((holiday === 1 || (holiday === 2))) {
	money = 3000;
	console.log(`My money is ${money}`);
} else if ((holiday === 3)) {
	money = 2000;
	console.log(`My money is ${money}`);
} else if ((holiday === 4)) {
	money = 1000;
	console.log(`My money is ${money}`);
} else if ((holiday === 5)) {
	money = 0;
	console.log(`My money is ${money}`);
} else {
	money = 0;
	console.log(`My money is ${money}`);
}
//! Assignment 01
let day = " wednesday  ";
day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1).toLowerCase();
switch (day) {
    case "Friday" :
    case "Saturday" :
    case "Sunday" :
        console.log("No Appointments Available")
        break
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
        break
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
        break
    default: console.log("Its Not A Valid Day")
}

console.log(day.trim().charAt(0).toUpperCase())
console.log(day.trim().slice(1).toLowerCase())