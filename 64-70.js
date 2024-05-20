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
