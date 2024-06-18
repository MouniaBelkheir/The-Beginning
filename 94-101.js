// ! Event Simulation - Click Focus Blur
window.onload = function () {
	let one = document.querySelector(".one");
	let two = document.querySelector(".two");
	let submit = document.querySelector(".submit");
	// تأكد من أن الحقل الأول يأخذ التركيز عند تحميل الصفحة
	if (one) {
		one.focus();
	}
	// إضافة حدث input للحقل الأول للتحقق من طول القيمة
	one.addEventListener("input", function () {
		// التأكد من أن القيمة تحتوي على رقم واحد فقط
		if (one.value.length === 1) {
			// نقل التركيز إلى الحقل الثاني
			two.focus();
		}
	});
	two.addEventListener("input", function () {
		if (two.value.length === 1) {
			submit.focus();
		}
	});
};

// submit.addEventListener("focus", function (event) {
// 	document.links[0].click();
// 	event.preventDefault();
// });
//! Class List Object And Methods
let element = document.getElementById("my-div");
console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("one"));
console.log(element.classList.item("0"));
console.log(element.classList.item("2"));
element.onclick = function () {
	element.classList.add("add-another");
	element.classList.remove("show");
	element.classList.toggle("free");
};
