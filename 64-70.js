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
 const itsMe = () =>
     `Iam A Normal Function`;
  
console.log(itsMe()); // Iam A Normal Function
//!!!!!
const urlCreate = (protocol, web, tld)=>
     `${protocol}://www.${web}.${tld}`;
      console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
