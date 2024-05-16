//! Challenge
let zero = 0;
let counter = 3;
let my = ["Ahmad", "Mazero", "Elhem", "Osama", "Gamal", "Ameer"];
console.log(my.slice(zero, ++counter).reverse());
console.log(my.slice(++zero, --counter).reverse());
let Elzero = `${my[--counter].slice(--zero, counter)}${my[--counter].substring(
	++counter
)}`;
console.log(Elzero); // Elzero
let r = Elzero.slice(counter + counter, --zero);
console.log(r);

let O = Elzero.slice(zero).toUpperCase();
console.log(O);
let rO = r + O;
console.log(rO);
let a = 1;
// ! Assignment 01
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

//* Method 1
console.log(myFriends.pop()); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//* Method 2
console.log(myFriends.push("jjj")); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends.splice(3, 1)); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//! Assignment 02
//$ No Slice method
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
console.log(friends.shift());
console.log(friends.pop());
console.log(friends); // ["Eman", "Osama"]
//! Assignment 03
//$ NO numbers, One line of code
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrTwo.pop().split().concat(arrOne.reverse(), arrTwo.reverse());
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//! Assignment 04
//$ NO numbers, only {0}; One line of code
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
//! Assignment 05
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// //$ Solution 01
haystack.includes(needle) ? console.log("Found") : console.log("missing");
// //$ Solution 02
if (haystack.slice(1, 2) == needle) {
	console.log("Found");
} else {
	console.log("missing");
}
// //$ Solution 03
haystack.splice(1, 1) == needle ? console.log("Found") : console.log("missing");
//! Assignment 06
//$ No numbers
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2.slice(2,3).toString().toLowerCase() + arr1.pop().toLowerCase() +arr2.pop().toLowerCase()
console.log(allArrs); // fxy
function fun() {
  let num = 5
  if (num === "5") return  true
  else return false
}

console.log(fun())