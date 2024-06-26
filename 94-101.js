// ! Event Simulation - Click Focus Blur
// window.onload = function () {
// 	let one = document.querySelector(".one");
// 	let two = document.querySelector(".two");
// 	let submit = document.querySelector(".submit");
// 	// تأكد من أن الحقل الأول يأخذ التركيز عند تحميل الصفحة
// 	if (one) {
// 		one.focus();
// 	}
// 	// إضافة حدث input للحقل الأول للتحقق من طول القيمة
// 	one.addEventListener("input", function () {
// 		// التأكد من أن القيمة تحتوي على رقم واحد فقط
// 		if (one.value.length === 1) {
// 			// نقل التركيز إلى الحقل الثاني
// 			two.focus();
// 		}
// 	});
// 	two.addEventListener("input", function () {
// 		if (two.value.length === 1) {
// 			submit.focus();
// 		}
// 	});
// };

// submit.addEventListener("focus", function (event) {
// 	document.links[0].click();
// 	event.preventDefault();
// });
//! Class List Object And Methods
// let element = document.getElementById("my-div");
// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("one"));
// console.log(element.classList.item("0"));
// console.log(element.classList.item("2"));
// element.onclick = function () {
// 	element.classList.add("add-another");
// 	element.classList.remove("show");
// 	element.classList.toggle("free");
// };
//! CSS Styling And Stylesheets
// let element = document.getElementById("my-div");
// // element.style.color = "red";
// element.style.backgroundColor = "cyan";
// element.style.cssText = "font-weight: bold ; color:brown ";
// element.style.removeProperty("color")
// element.style.setProperty('font-size', '40px', 'important')
// document.styleSheets[0].cssRules[0].style.removeProperty('line-height')
// document.styleSheets[0].cssRules[0].style.setProperty('background-color','chocolate')
//! Before, After, Prepend, Append, Remove
// let element = document.getElementById("my-div");
// let createedP = document.createElement("p");
// let content = (createedP.textContent = "hello");
// // element.appendChild(createedP);
// element.before("hello before");
// element.after("hello after");
// element.after(createedP);
// element.append(' hi')
// element.prepend(' hi ')
// element.remove()
//! DOM Traversing
// let span = document.querySelector(".two");
// console.log(span.nextSibling);
// console.log(span.previousSibling);
// console.log(span.previousElementSibling);
// console.log(span.nextElementSibling);
// console.log(span.parentElement)
// console.log(span.parentNode)
//! DOM Cloning
// let myP = document.querySelector("p").cloneNode(true);
// console.log(myP);
// myP.id = `${myP.id}-cloned`;
// let myDiv = document.querySelector("div");
// myDiv.appendChild(myP);
// console.log(myDiv);
//! AddEventListener
// let myP = document.querySelector("p");
// console.log(myP);
// myP.onclick = function () {
// 	console.log("message from onClick");
// };
// myP.onclick = one;
// myP.onclick = two;
// function one() {
// 	console.log("message from onClick 1");
// }
// function two() {
// 	console.log("message from onClick 2");
// }
// myP.addEventListener("click", function () {
// 	console.log("message from the event");
// });
// myP.addEventListener("click", one);
// myP.addEventListener("click", two);
// myP.addEventListener("click", function () {
// 	let newP = myP.cloneNode(true);
// 	newP.className = "newP";
//     document.body.appendChild(newP);
//     newP.addEventListener("click", function () {
// 	console.log("I am a copy");
// });
// });
//! DOM Challenge
// document.body.style.cssText = "font-family: sans-serif;";
// // Create and style container div
// let container = document.createElement("div");
// container.id = "container";
// // container.style.display = "flex";
// document.body.prepend(container);

// // Create and style header div and append it to container
// let header = document.createElement("div");
// header.id = "header";
// header.style.cssText =
// 	"display: flex; justify-content: space-between; width: 100%; padding-bottom: 5px; ";
// container.append(header);

// // Create logo div and append it to header
// let logo = document.createElement("div");
// logo.className = "logo";
// logo.textContent = "Elzero";
// logo.style.cssText =
// 	"color: rgb(21 203 100); font-weight: bold; align-content: center";
// header.appendChild(logo);

// // Create navDiv, navLinks and append them to header
// let navDiv = document.createElement("div");
// navDiv.className = "navDiv";
// header.append(navDiv);

// let navLinks = document.createElement("ul");
// navLinks.style.cssText =
// 	"list-style-type: none; display: flex; gap: 20px; margin:0 ";
// navDiv.append(navLinks);

// // Create links from linkArray and append them to navLinks
// let linkArray = ["Home", "About", "Service", "Contact"];
// linkArray.forEach((element) => {
// 	let li = document.createElement("li");
// 	let a = document.createElement("a");
// 	a.textContent = element;
// 	a.href = `#${element.toLowerCase()}`;
// 	a.style.textDecoration = "none";
// 	a.style.color = "grey";
// 	a.style.fontSize = "14px";
// 	li.appendChild(a);
// 	navLinks.appendChild(li);
// });
// // create main section
// let main = document.createElement("div");
// main.id = "main";
// main.style.cssText =
// 	"display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: repeat(5, 1fr); gap: 15px; background: rgb(243, 243, 242); padding: 10px";
// container.append(main);
// for (let i = 1; i <= 15; i++) {
// 	let productDiv = document.createElement("div");
// 	productDiv.style.cssText =
// 		"background: white; display: flex; justify-content: center; align-items: center;";
// 	let productCount = document.createElement("span");
// 	productCount.style.cssText = "font-size: 25px;font-weight:bold";
// 	productCount.textContent = i;
// 	let ProductText = document.createElement("span");
// 	ProductText.textContent = "Product";
// 	ProductText.style.cssText = "color:grey;font-size: 14px;font-weight:bold  ";
// 	productDiv.appendChild(productCount);
// 	productDiv.appendChild(ProductText);
// 	productDiv.style.cssText =
// 		"background:white ; display:flex ;align-items: center; background: white; display: flex; flex-direction: column;";
// 	main.append(productDiv);
// }
// // Add footer
// let footer = document.createElement("div");
// footer.textContent = "Copyright 2024";
// footer.style.cssText =
// 	"background: rgb(21 203 100); color:white; display:flex;justify-content:center";
// container.appendChild(footer);
