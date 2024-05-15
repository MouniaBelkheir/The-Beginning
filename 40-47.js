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
