//! setInterval and clearInterval
let div = document.querySelector("div");
function count() {
	div.innerHTML -= 1;
	if (div.innerHTML === "0") {
		clearInterval(counter);
	}
}
let counter = setInterval(count, 1000);
