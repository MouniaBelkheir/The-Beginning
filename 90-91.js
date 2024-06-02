//! Product With Title And Description Practice
//* div class="product" >h3>p
//* div repeat 100
//$ repeat/loop for myDiv 100 times
// for (let i = 0; i < 100; i++) {
// 	//$ create div
// 	let myDiv = document.createElement("div");
// 	myDiv.className = "product";
// 	console.log(myDiv);
// 	//$ create h3 and append it to div
// 	let h3 = document.createElement("h3");
// 	let text = document.createTextNode("text of h3");
// 	h3.appendChild(text);
// 	myDiv.appendChild(h3);
// 	console.log(h3);
// 	//$ create p and append it to div
// 	let p = document.createElement("p");
// 	let text2 = document.createTextNode("text of p");
// 	p.appendChild(text2);
// 	myDiv.appendChild(p);
// 	console.log(p);
// 	//$ Append div to body
// 	document.body.appendChild(myDiv);
// }
//! Deal With Children
// let myElement = document.querySelector('div')
// console.log(myElement)
// console.log(myElement.children)
// console.log(myElement.children[0])
// console.log(myElement.childNodes)
// console.log(myElement.childNodes[0])
// console.log(myElement.firstChild)
// console.log(myElement.lastChild)
// console.log(myElement.firstElementChild)
// console.log(myElement.lastElementChild)
//! DOM Events
//$ OnClick
let myBtn = document.getElementById("btn");
myBtn.onclick = () => console.log("button clicked");
