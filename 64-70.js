function parent() {
	let a = 10;
	function child() {
		let a = 20;
		console.log(a);
		function grandChild() {
			let a = 30;
			console.log(a);
		}
		grandChild();
	}
	child();
	console.log(a);
}
parent();

//! Arrow function Challenge
// function names(...name) {
// 	return `String [${name.join("], " + "[")}] => Done!`;
// }
let names = (...name) => `String [${name.join("], " + "[")}] => Done!`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
//$ Output: String [Osama], [Mohamed],[Ali],[Ibrahim] => Done!
