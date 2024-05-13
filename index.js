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
// let a = 21;
// let b = 20;

// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // _21_2021_2021_2021_20_
// console.log("_" + `${a}_${b}`.repeat(4));
//* Lessons 18 - 22

// !Challenge 01
let a = 10;
let b = "20";
let c = 80;
// console.log(++a + +b++ + +c++ - +a++);
/*
    ?[++a]
     *   Value = 11
      $  Explain = pre-increment operator

    ?[+] = "addition operater"

    ?[+b++]
     *   Value = 20;
      $  Explain = first unary plus operator convert the value from string to number, then post-increment increase the value by 1 to be 21 but not used
    
    ?[+] = "addition operater"

    ?[+c++]
     *   Value = 80;
      $  Explain = unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 81 but not used

    ?[-] = subtraction operater

    ?[+a++]
     *   Value = 11;
      $  Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 12 but not used

    !so, the total value = 11 + 20 + 80 - 11 = 100

*/
// console.log(++a + -b + +c++ - -a++ + +a);
/*
*let a = 10;
*let b = "20";
*let c = 80;
   ? [++a] 
    *    Value = 11
     $   Explain = pre-increment operator
     ?-[-a++]
     * Value = 11
    $ Explain = - -a++ (-)*(-)(11) = +11, +1 is not used
     ?[+a]
     * Value = 12
     $ Explain = now a=12 because a++ is used
       
    ?[+] = "addition operater"
    ?[-b]
     *   Value = -20;
      $  Explain = unary subtraction operator convert the value from string to negative number
        ?[+] = "addition operater"
        ?[+c++]
     *   Value = 80;
      $  Explain = unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 81 but not used
    ?[-] = subtraction operater
 ?[+] = "addition operater"
 ? [-b]
 * Value = -20
 $ Explain = string became number because of unary subtraction
 ? [+c++]
 * Value = 80
 $ Explain = number (++) is not used
    ! so, the total value = 11 - 20 + 80 + 11 + 12
*/
// !Challenge 02
let d = "-100";
let e = "20";
let f = 30;
let g = true;
// *console.log(-d * e); //2000
//* console.log(++e * ++g + ++f - d ); //173
// !Assignment 01
// Replace ? With Arithmetic Operators
console.log(10 - (((20 * 15) / 3) * 190) / 10 / 400); // 0
// ! Assignment 02
let num = 3;

// Solution One
console.log(num++ + --num); // 6

// Solution Two
console.log(num + num); // 6

// Soultion Three
// console.log(++num + num - num-- + num-- + num-- - num-- - ++num - num); // 6
// Solution Four
console.log(num * num - num); // 6
//$ Lessons 23 - 26
//? Challenge
let m = 1_00;
let n = 2_00.5;
let o = 1e2;
let p = 2.4;
//* Smallest number and return Integer
console.log(Math.trunc(Math.min(m, n, o, p)));
//* Use m + p One time
console.log(Math.pow(m, Math.trunc(p))); //10000
// 100e2
//* Get Integer from p in 4 diff. ways
console.log(Math.trunc(p));
console.log(Math.floor(p));
console.log(Math.round(p));
console.log(parseInt(p));
//* Use n, p to get:
console.log(((parseInt(n) / Math.ceil(p)).toFixed(2)).toString()); //66.67 => String
console.log(Math.round(parseInt(n) / Math.ceil(p))); // 67 => Number
    
//! Assignment 01
// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
