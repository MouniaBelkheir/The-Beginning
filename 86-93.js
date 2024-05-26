//! DOM and select elements
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);
let myTagElement = document.getElementsByTagName("p");
console.log(myTagElement);
myTagElement[1].innerHTML = "Modified";
console.log(myTagElement[1]);
let myClassElement = document.getElementsByClassName("my-span");
console.log(myClassElement);
console.log(myClassElement[1]);
let myQueryElement = document.querySelector(".special");
let myQueryElement1 = document.querySelector(".my-span"); //$ returns first selector
let myQueryElements = document.querySelectorAll(".my-span"); //$ returns all the selectors "All"
let myQueryElementss = document.querySelector("#my-div");
console.log(myQueryElement);
console.log(myQueryElement1);
console.log(myQueryElements);
console.log(myQueryElementss);
console.log("********************");
console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[1]);
console.log(document.forms[1].name);
console.log(document.forms[1].name.value);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[1].href);
