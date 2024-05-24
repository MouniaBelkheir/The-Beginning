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
// let ignoreNumbers = "Elz123er4o";
// let ignore = ignoreNumbers
// 	.split("")
// 	.map((e) => (isNaN(parseInt(e)) ? e : ""))
// 	.join("");
// console.log(ignore);
//! Higher Order Functions - Filter
//$ 1
let numberss = [11, 20, 2, 5, 17, 10];
let addMap = numberss.map((n) => n + n);
console.log(addMap);
let addFilter = numberss.filter((n) => n % 2 === 0);
console.log(addFilter);
//$ 2
let friends = ["Ahmad", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let startWithA = friends.filter((n) => n.startsWith("A"));
console.log(startWithA);
//! Filter Practice
//$ 1 Filter words more then 4 characters
let sentence = "I Love Foood Code Too Playing Much";
let word = sentence
	.split(" ")
	.filter((w) => w.length <= 4)
	.join(" ");
console.log(word);
//$ 2
let ignoreNumbers = "Elz123er4o";
let ignore = ignoreNumbers
	.split("")
	.filter((n) => isNaN(parseInt(n)))
	.join("");

console.log(ignore);
//$ 3 Filter Strings + Multiply
let mix = "A13BS2ZX";
let sm = mix
	.split("")
	.filter((s) => !isNaN(parseInt(s)))
	.map((s) => s * s);
console.log(sm);

//! Higher Order Functions - Reduce
let numss = [10, 20, 15, 30];
let add_ = numss.reduce((acc, cur) => acc + cur, 5);
console.log(add_);
//$ Reduce Practice
//? 1
let theBiggest = ["Bla", "Probaganda", "Other", "AAA", "Battery", "Test"];
let big = theBiggest.reduce((acc, curr) =>
	acc.length > curr.length ? acc : curr
);
console.log(big);
//? 2
let removeCharts = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let removed = removeCharts.filter((r) => r !== "@").reduce((ac, cu) => ac + cu);
console.log(removed);
//! Higher Order Functions - ForEach lesson And Practice
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(" .content div");

allLis.forEach(function (li) {
	li.onclick = function () {
		allLis.forEach(function (li) {
			// remove active class from all elements
			li.classList.remove("active");
		});
		// add active class to this element
		this.classList.add("active");
		// Hide all divs
		allDivs.forEach(function (div) {
			div.style.display = "none";
		});
	};
});
//! Higher Order Functions - Challenge
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString
	.split(",") // turn the string into an array
	.filter((w) => isNaN(w) && w !== myString.split("").pop()) // removed the numbers && "Z"
	.map((w) => (w.length > -myString.lastIndexOf() ? w.split("").pop() : w)) //  removed the E from "EE" (w.length>2)
	.reduce((ac, cu) => ac + cu) // turned the array to a string
	.split("_") // removed "_" and the string became an array again
	.join(" "); // turn the array into the final string output

console.log(solution); // Outputs "Elzero Web School"
//! Assignment 01/ Map + Reduce
let mixed = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let phrase1 = mixed.map((w) => (isNaN(w) ? w : "")).reduce((ac, cu) => ac + cu);
console.log(phrase1);
// Elzero
//! Assignment 02/ Filter + Concatenation
let myString1 = "EElllzzzzzzzeroo";
let phrase2 = myString1
	.split("")
	.filter((ele, ind, arr) => arr[ind] !== arr[ind + 1])
	.join("");
console.log(phrase2);
// Elzero
//! Assignment 03/ Reduce
//$01
let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let phrase3 = myArray
// .reduce((ac, cu) => ac + cu):
// .split(",")
// .join("");
// console.log(phrase3);
// Elzero
//$02
let phrase3 = myArray
	.reduce((ac, cu) => ac.concat(cu), []) // Flatten the array
	.join(""); // Join the characters into a single string
console.log(phrase3);
