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
if (st.split(" ",1).toString().repeat(2) === "ElzeroElzero") {
	console.log("Good");
}
