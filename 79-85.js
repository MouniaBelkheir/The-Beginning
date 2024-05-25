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

//! This Keyword
console.log("##############");

document.getElementById("cl").onclick = function () {
	console.log(this);
};
let one = {
	age: 33,
	ageInDays: function () {
		console.log(typeof this);
		return this.age * 365;
	},
};

console.log(one.age);
console.log(one.ageInDays());
//! Create Object With "create" Method
let userr = {
	age: 20,
	doubleAge: function () {
		return this.age * 2;
	},
};

console.log(userr);
console.log(userr.age);
console.log(userr.doubleAge());
let obj = Object.create({});
console.log(obj);
obj.a = 100;
console.log(obj);
let copyObj = Object.create(userr);
copyObj.age = 30;
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
//! Create Object With "Assign" Method
let obj1 = {
	prop1: 1,
	meth1: function () {
		return this.prop1;
	},
};
console.log(obj1);
let obj2 = {
	prop2: 2,
	meth2: function () {
		return this.prop2;
	},
};

let targetObject = {
	prop1: 100,
	prop3: 3,
};
let finalObject = Object.assign(targetObject, obj1, obj2);
console.log(finalObject);

finalObject.prop1 = 200;
finalObject.prop4 = 4;
console.log(finalObject);
let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
console.log(newObject);
//! Assignment 01
let member = {
	name: "Elzero",
	age: 38,
	country: "Egypt",
	fullDetails: function () {
		return `My name is ${this.name}, My age is ${this.age}, I live in ${this.country}`;
	},
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
//! Assignment 02/ Create new Object
//$ Method One
let objMethodOne = {};
objMethodOne.property = "Method One";
console.log(objMethodOne.property); // "Method One"
//$ Method Two
let objMethodTwo = new Object({});
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"
//$ Method Three
let objMethodThree = Object.create({});
objMethodThree.property = "Method Three";
console.log(objMethodThree.property); // "Method Three"
//$ Method Four
let objMethodFour = Object.assign({}, { property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"
