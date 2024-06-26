//! Arrow function Challenge
//$ Challenge 01
//* function names(...name) {
//* 	return `String [${name.join("], " + "[")}] => Done!`;
//* }
let names = (...name) => `String [${name.join("], " + "[")}] => Done!`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
//$ Output: String [Osama], [Mohamed],[Ali],[Ibrahim] => Done!

//? Challenge 02
let myNumbers = [20, 50, 10, 60];
//* let calc = (One, Two, ...nums) => One + Two + num[0];
function calc(One, Two, ...nums) {
	return One + Two + nums[0];
}

console.log(calc(10, 20, 50)); //? 80

//! Functions and Scopes
//! Assignment 01
function getDetails(zName, zAge, zCountry) {
	function namePattern(zName) {
		let nPart = zName.split(" ");
		let initials = nPart[1].charAt(0).toUpperCase();
		return nPart[0] + " " + initials + ".";
	}

	function ageWithMessage(zAge) {
		ages = zAge.split(" ");
		return "Your age is " + ages[0];
	}

	function countryTwoLetters(zCountry) {
		let cntry = zCountry.slice(0, 2);
		cntry = cntry.toUpperCase();
		return "You live in " + cntry;
	}

	function fullDetails() {
		let name = namePattern(zName);
		let age = ageWithMessage(zAge);
		let country = countryTwoLetters(zCountry);
		return `Hello ${name}, ${age}, ${country}`;
	}
	return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
//   //* Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   //* Hello Ahmed A., Your Age Is 32, You Live In SY
//! Assignment 02
//$ To Arrow function:
//! 01
const itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function
//! 02
const urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
//! Assignment 03
const checker = (zName) => (status) => (salary) =>
	status === "Available"
		? `${zName}, My Salary Is ${salary}`
		: `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
//$ function checker(zName) {
//$     return function (status) {
//$       return function (salary) {
//$         return status === "Available" ? `${zName}, My Salary Is ${salary}` : $`Iam Not Avaialble`;
// $      };
//$     };
// $  }
//! Assignment 04
function specialMix(...data) {
	let sum = 0;
	let allStrings = true;

	for (let item of data) {
		if (typeof item === "number") {
			sum += item;
			allStrings = false;
		} else if (typeof item === "string") {
			let num = parseFloat(item);
			if (!isNaN(num)) {
				sum += num;
				allStrings = false;
			}
		}
	}

	if (allStrings) {
		return "All Is Strings";
	} else {
		return sum;
	}
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
