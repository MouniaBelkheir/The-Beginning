//! Lessons: 01 - 09
//? Assignment 1
//*Code One (Not Working): This script tries to modify the color of the element before it exists in the DOM. Since it's placed in the <head> section, it executes before the HTML body content is loaded, so the element with the ID "el" doesn't exist yet. Therefore, it won't work.
//*Code Two (Working): This script waits for the entire window to load (window.onload), ensuring that all HTML content, including the element with the ID "el," is fully loaded before attempting to modify it. This approach ensures that the script will work as intended.
//*Code Three (Working): This script is placed at the end of the <body> section, so it executes after the HTML content above it is loaded. By the time this script runs, the element with the ID "el" exists in the DOM, so it will successfully change its color. */

//? Assignment 2
document.getElementById("el").style.cssText =
	"color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;";

//? Assignment 3
//See the console
console.log(
	"%cHello %cBeatiful %cMounia",
	"color:red; font-size: 40px;",
	"color:green; font-size: 40px; font-weight:bold",
	"color:white; background:pink; font-size: 40px;"
);

//? Assignment 4 undo execution of the code without deleting it:
//* first method: single line comment
// console.log("Iam In Console");
// document.write("Iam In Page");
//* Second method multi ligne comment
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
//? Assignment 5
console.table(["One", "Two", "Three", "Four", "Five"]);

//? Assignment 6

console.group("Group 1");
console.log("message 1");
console.log("message 2");

console.group("child group"),
	console.log("message 1"),
	console.log("message 2"),
	console.group("grand child group"),
	console.log("message 1"),
	console.log("message 2");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("message 1");
console.log("message 2");

//* Lessons 10 - 17
// ! Data Types
//? Assignement 01
let numberOne = 10,
	numberTwo = 20;
console.log(`${numberOne}${numberTwo}`);
console.log(numberOne + "\n" + numberTwo);
console.log(numberOne, numberTwo);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(`${numberOne}
${numberTwo}`);

// !challenge

let theTitle = "El Zero",
	theDesc = "El zero web school",
	theDate = "25/10";
let container = `<div>
<h3>Hello ${theTitle}</h3>
<p>${theDesc}</p>
<span>${theDate}</span>
</div> `;
document.write(container.repeat(4));

//? Assignment 02
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//? Assignment 03
console.log(
    '`I\'m In \n \\\\ \nLove \\\\"""\'\'\' \n ++ With ++ \n \\"""\\""" \n ""JavaScript""``'
);

//? Assignment 04
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // _21_2021_2021_2021_20_
