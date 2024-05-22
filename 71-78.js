let sum = 0;
let nums = [1, 2, 3, 4, 5, 6];
let numbers = () => {
	for (i of nums) {
		// for (i = 0; i < nums.length;i++) {
		// sum += nums[i];
		sum += i;
	}
	return sum;
};
console.log(numbers());
//! Higher Order Functions - Map
let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];
for (let i = 0; i < myNums.length; i++) {
	// console.log(myNums[i] + myNums[i])
	newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray);
//$ Same idea with Map
//! Regular function
// let addSelf = myNums.map(function (element, index, array) {
//     // console.log(`Current Element => ${element}`)
//     // console.log(`Current Index => ${index}`)
//     // console.log(`Array => ${array}`)
//     // console.log(`This => ${this}`)
//     return element + element
// }, 10)
// console.log(addSelf)
//! Arrow function
let addSelf = myNums.map((e) => e + e);
console.log(addSelf);
//$
function addition(el) {
	return el + el;
}
let add = myNums.map(addition);
console.log(add);

//! Map Practice
//$ 1
let swappingCases = "elZERo";
let swap = swappingCases
	.split("")
	.map((e) => (e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()))
	.join("");
console.log(swap);
//$ 2
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let invert = invertedNumbers.map((n) => -n);
console.log(invert);
//$ 3
let ignoreNumbers = "Elz123er4o";
let ignore = ignoreNumbers
	.split("")
	.map((e) => (isNaN(parseInt(e)) ? e : ""))
	.join("");
console.log(ignore);
