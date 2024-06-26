//! DOM and select elements
// let myIdElement = document.getElementById("my-div");
// console.log(myIdElement);
// let myTagElement = document.getElementsByTagName("p");
// console.log(myTagElement);
// myTagElement[1].innerHTML = "Modified";
// console.log(myTagElement[1]);
// let myClassElement = document.getElementsByClassName("my-span");
// console.log(myClassElement);
// console.log(myClassElement[1]);
// let myQueryElement = document.querySelector(".special");
// let myQueryElement1 = document.querySelector(".my-span"); //$ returns first selector
// let myQueryElements = document.querySelectorAll(".my-span"); //$ returns all the selectors "All"
// let myQueryElementss = document.querySelector("#my-div");
// console.log(myQueryElement);
// console.log(myQueryElement1);
// console.log(myQueryElements);
// console.log(myQueryElementss);
// console.log("********************");
// console.log(document.title);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.forms[1]);
// console.log(document.forms[1].name);
// console.log(document.forms[1].name.value);
// console.log(document.links);
// console.log(document.links[0]);
// console.log(document.links[1]);
// console.log(document.links[1].href);
//! Get Set Elements Content And Attributes
let myElement = document.querySelector(".js");
console.log(myElement);
console.log(myElement.innerHTML);
console.log(myElement.textContent);
myElement.innerHTML = "text from <span> js</span> file";
myElement.textContent = "text from <span> js</span> file";
document.images[0].src =
	"https://th.bing.com/th/id/OIP.axZS0GE4034W7-mZJtghrAHaEK?rs=1&pid=ImgDetMain";
document.images[0].alt = "cat";
document.images[0].title = "Beautiful Cat";
document.images[0].id = "catPic";
document.images[0].className = "firstCat";
//! Set
let myLink = document.querySelector(".link");
console.log(myLink);
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
myLink.setAttribute("href", "##");
myLink.setAttribute("class", "newLink");
console.log(myLink.getAttribute("href"));
console.log(myLink.getAttribute("class"));
//! Check Attributes And Examples
console.log(document.getElementsByTagName("p")[0].attributes);
let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) {
	if (myP.getAttribute("data-src") === "") {
		myP.removeAttribute("data-src");
	} else {
		myP.setAttribute("data-src", "updated");
	}
} else {
	console.log("not found");
}
myP.hasAttributes() ? console.log(myP.attributes) : `Doesn't have Atributes`;
if (document.getElementsByTagName("div")[0].hasAttributes()) {
	console.log(`Has attributes`);
} else {
	console.log(`no attributses`);
}
//! Create And Append Elements
let myNewElement = document.createElement("div");
let myAttrb = document.createAttribute("data-custom");
console.log(myNewElement);
myNewElement.className = "product";
myNewElement.setAttributeNode(myAttrb);
myNewElement.setAttribute("data-test", "tset");
let myText = document.createTextNode("Product one");
//$ Append text to element
myNewElement.appendChild(myText);
//$ Append element to body
document.body.appendChild(myNewElement);
let myComment = document.createComment('this is a div')
console.log(myComment)
//$ Append comment to element
myNewElement.appendChild(myComment)
//! Product With Title And Description Practice