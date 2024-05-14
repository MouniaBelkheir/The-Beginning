// *Lessons 33 - 3
let Age = 30;
Age < 10
	? console.log("Baby")
	: Age === 10
	? console.log("10")
	: Age == 20
	? console.log("Mature")
	: console.log("heyyy");
//! If Challenge
//$ Ternary Operator
let a = -5;
if (a < 0) {
	console.log(10);
} else if (a >= 0 && a <= 40) {
	console.log("10 to 40");
} else if (a > 40) {
	console.log(">40");
} else {
	console.log("unknown");
}
a < 0
	? console.log(10)
	: a >= 0 && a <= 40
	? console.log("10 to 40")
	: a > 40
	? console.log(">40")
	: console.log("unknown");
//$ Ternary If syntax
let st = "Elzero Web School";
if (st.repeat(2).length.toString() === "34") {
	console.log("Good");
}
//$ W position may change
if (st.charAt(st.indexOf("W")) === "W") {
	console.log("Good");
}
if (st[0] !== "string") {
	console.log("Good");
}
if ((typeof st.indexOf("W")).toString() === "number") {
	console.log("Good");
}
if (st.split(" ", 1).toString().repeat(2) === "ElzeroElzero") {
	console.log("Good");
}
// //! Assignment 01
//* إذا كان الرقم أصغر من 10 قم بطباعة الرقم وقبله صفرين
//* إذا كان الرقم أكبر من 10 وأصغر من 100 قم بطباعة الرقم وقبله صفر
//* إذا كان الرقم أكبر من أو يساوي 100 قم بطباعة الرقم كما هو
let num = 20;
num < 10
	? console.log(`00${num}`)
	: num > 10 && num < 100
	? console.log(`0${num}`)
	: num >= 100
	? console.log(num)
	: "";
// ! Assignment 02
let num1 = 4;
let str = false;
let str2 = 5;

if (num1 === str) {
	console.log(`${num1} Is The Same Value As ${str}`);
} else if (num1 == str) {
	console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
} else if (num1 !== str2) {
	console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
} else if (typeof str === typeof str2) {
	console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
