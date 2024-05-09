// Assignment 1
/*Code One (Not Working): This script tries to modify the color of the element before it exists in the DOM. Since it's placed in the <head> section, it executes before the HTML body content is loaded, so the element with the ID "el" doesn't exist yet. Therefore, it won't work.
Code Two (Working): This script waits for the entire window to load (window.onload), ensuring that all HTML content, including the element with the ID "el," is fully loaded before attempting to modify it. This approach ensures that the script will work as intended.
Code Three (Working): This script is placed at the end of the <body> section, so it executes after the HTML content above it is loaded. By the time this script runs, the element with the ID "el" exists in the DOM, so it will successfully change its color. */

// Assignment 2
document.getElementById("el").style.cssText =
	"color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;";

//Assignment 3
//See the console
console.log(
	"%cElzero %cWeb %cSchool",
	"color:red; font-size: 40px;",
	"color:green; font-size: 40px; font-weight:bold",
	"color:white; background:blue; font-size: 40px;"
);

// Assignment 4 undo execution of the code without deleting it:
// first method: single line comment
// console.log("Iam In Console");
// document.write("Iam In Page");
// Second method multi ligne comment
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
// Assignment 5
console.table(["One", "Two", "Three", "Four", "Five"]);

// Assignment 6

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
