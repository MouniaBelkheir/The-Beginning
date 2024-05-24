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
