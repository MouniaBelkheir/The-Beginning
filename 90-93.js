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
// let myBtn = document.getElementById("btn");
// myBtn.onclick = () => console.log("button clicked");

// //! Validate Form And Prevent Default
// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");
// document.forms[0].onsubmit = function (e) {
// 	let userValid = false;
// 	let ageValid = false;

// 	console.log(userInput.value);
// 	console.log(userInput.value.length);
// 	if (userInput.value !== "" && userInput.value.length <= 10) {
// 		userValid = true;
// 	}
// 	if (ageInput.value != "") {
// 		ageValid = true;
// 	}
// 	if (ageValid === false || userValid === false) {
// 		e.preventDefault();
// 	}
// };
// document.links[0].onclick = function (event) {
// 	console.log(event);
// 	event.preventDefault();
// };
//! Assignment 01
//$ 4 times querySellector / querrySellector All
//* <div id="elzero" class="element" name="js">JavaScript</div>
// //? 1
// console.log(document.getElementById("elzero"));
// //? 2
// console.log(document.getElementsByClassName("element"));
// //? 3
// console.log(document.getElementsByTagName("div"));
// //? 4
// console.log(document.querySelector("div"));
// //? 5
// console.log(document.querySelectorAll("div")[0]);
// //? 6
// console.log(document.querySelector("div"));
// //? 7
// console.log(document.querySelector(".element"));
// //? 8
// console.log(document.querySelector("#elzero"));
// //? 9
// console.log(document.body.children[0]);
// //? 10
// console.log(document.querySelector('[name="js"]'));
// //? 11
// console.log(document.querySelectorAll('[name="js"]')[0]);
// //? 12
// console.log(document.querySelectorAll(".element")[0]);
// //? 13
// console.log(document.querySelectorAll("div#elzero.element")[0]);
// //? 14
// console.log(document.getElementsByName("js")[0]);
// //? 15
// console.log(document.body.firstElementChild);
//! Assignment 02
// let logo = document.querySelectorAll("img");
// let newSrc =
// 	"https://i.pinimg.com/originals/60/e4/01/60e40103520f03acc57e13d87d2d83ed.jpg";
// let newAlt = "Elzero Logo";
// logo.forEach((logo) => {
// 	logo.setAttribute("src", newSrc);
// 	logo.setAttribute("alt", newAlt);
// });
//! Assignment 03
// document
// 	.querySelector('input[name="dollar"]')
// 	.addEventListener("input", function () {
// 		let dollarValue = parseFloat(this.value);
// 		let exchangeRate = 15.6;
// 		let resultDiv = document.querySelector(".result");

// 		if (!isNaN(dollarValue)) {
// 			let egyptianPound = (dollarValue * exchangeRate).toFixed(2);
// 			resultDiv.textContent = `${dollarValue} USD Dollar = ${egyptianPound} Egyptian Pound`;
// 		} else {
// 			resultDiv.textContent = `{0} USD Dollar = {0} Egyptian Pound`;
// 		}
// 	});
// //! Assignment 04
// let firstDiv = document.querySelector(".one");
// let secondDiv = document.querySelector(".two");
// let firstDivText = document.querySelector(".one").innerHTML;
// let secondDivText = document.querySelector(".two").innerHTML;

// firstDiv.setAttribute("title", secondDivText);
// firstDiv.innerHTML = secondDivText;
// secondDiv.innerHTML = firstDivText + " 2";
// //! Assignment 05
// let imgs = document.querySelectorAll("img");
// imgs.forEach((img) => {
// 	img.hasAttribute("alt")
// 		? img.setAttribute("alt", "Old")
// 		: img.setAttribute("alt", "Elzero New");
// });
//! Assignment 06
document
	.getElementById("elementForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const elementCount = parseInt(this.elements.value);
		const elementType = this.type.value.toLowerCase();
		const elementText = this.texts.value;
		const resultContainer = document.querySelector(".results");
		resultContainer.innerHTML = "";
		for (let i = 1; i <= elementCount; i++) {
			const newElement = document.createElement(elementType);
			newElement.textContent = elementText;
			newElement.className = "box";
			newElement.title = "element";
			newElement.id = `${i}`;
			resultContainer.appendChild(newElement);
		}
	});

//   // ربط الحدث submit للنموذج
//   document.getElementById('elementForm').addEventListener('submit', function(event) {
//     // منع الإرسال الافتراضي للنموذج
//     event.preventDefault();

//     // استخراج عدد العناصر والنص ونوع العنصر من النموذج
//     const elementsCount = parseInt(this.elements.value);
//     const elementsText = this.texts.value;
//     const elementType = this.type.value.toLowerCase();
//     const resultsContainer = document.querySelector('.results');

//     // إزالة أي عناصر قديمة من حاوية النتائج
//     resultsContainer.innerHTML = '';

//     // إنشاء العناصر الجديدة بناءً على العدد المدخل
//     for (let i = 1; i <= elementsCount; i++) {
//       // إنشاء عنصر جديد من النوع المحدد (Div أو Section)
//       const newElement = document.createElement(elementType);

//       // تعيين الصفات للعناصر الجديدة
//       newElement.className = 'box'; // تعيين الصنف
//       newElement.title = 'Element'; // تعيين العنوان
//       newElement.id = `id-${i}`; // تعيين المعرف مع زيادة الرقم لكل عنصر
//       newElement.textContent = elementsText; // تعيين النص الداخلي

//       // إضافة العنصر الجديد إلى حاوية النتائج
//       resultsContainer.appendChild(newElement);
//     }
//   });
