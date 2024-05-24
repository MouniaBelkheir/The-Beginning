//! Object - Introduction
let user = {
	//? Properties
	name: "Mounia",
	age: 33,
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
