//! Challenge
let zero = 0;
let counter = 3;
let my = ["Ahmad", "Mazero", "Elhem", "Osama", "Gamal", "Ameer"];
console.log(my.slice(zero, ++counter).reverse());
console.log(my.slice(++zero, --counter).reverse());
let Elzero = `${my[--counter].slice(--zero, counter)}${my[--counter].substring(
	++counter
)}`;
console.log(Elzero); // Elzero
let r = Elzero.slice(counter + counter,--zero);
console.log(r);

let O = Elzero.slice(zero).toUpperCase();
console.log(O);
let rO = r + O;
console.log(rO);
let a = 1
// ! Assignment 01
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

//* Method 1
 console.log(myFriends.pop()); // ["Ahmed", "Elham", "Osama"];
 console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//* Method 2
console.log(myFriends.push("jjj")); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends.splice(3,1)); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];