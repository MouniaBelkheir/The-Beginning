//! Object - Introduction
let myVar = "country";
let user = {
	//? Properties
	name: "Mounia",
	age: 33,
	"The city": "Biskra",
	country: "Algeria",
	//? Methods
	sayHello: function () {
		return "Hello";
	},
	sayBye: () => "Bye",
};
console.log(user.name);
console.log(user.age);
console.log(user.sayHello());
console.log(user.sayBye());
//! Dot Notation vs Bracket Notation
console.log(user["name"]);
console.log(user["The city"]);
console.log(user[myVar]);
//! Nested Object And Advanced Trainings
let available = true;
let theUser = {
	name: "Mounia",
	age: 33,
	skills: ["HTML", "CSS", "JS"],
	available: false,
	adresses: {
		USA: "New York",
		CANADA: {
			one: "Toronto",
			two: "British Colombia",
		},
	},
	checkAv: function () {
		if (theUser.available === true) {
			return "I am available";
		} else {
			return "I am not available";
		}
	},
	check: () => (available === true ? "I am available" : "I am not available"),
};
console.log("*************");
console.log(theUser.name);
console.log(theUser.age);
console.log(theUser.skills);
console.log(theUser.available);
console.log(theUser.adresses);
console.log(theUser.adresses.USA);
console.log(theUser.adresses.CANADA);
console.log(theUser.adresses.CANADA.one);
console.log(theUser.adresses.CANADA.two);
console.log("*************");
console.log(theUser["adresses"].CANADA["one"]);
console.log(theUser.check());
console.log(theUser.checkAv());
//! Create Object With "new" Keyword
let person = new Object({ country: "Alg" });
console.log(person);
person.name = "Moon";
person["age"] = 33;
person.country = "Algeria";
person.greeting = () => "Hey!";
console.log(person);