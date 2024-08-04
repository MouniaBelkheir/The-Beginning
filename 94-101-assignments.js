//! Assignment 2
// let add = document.querySelector("input.classes-to-add");
// let remove = document.querySelector("input.classes-to-remove");
// let output = document.querySelector(".output");
// let current = document.querySelector('div[title="Current"]');

// // Function to update the result output
// function updateResult() {
//     const classList = Array.from(current.classList).sort();
//     output.innerHTML = ''; // Clear previous output
//     if (classList.length > 0) {
//         classList.forEach(cls => {
//             let span = document.createElement('span');
//             span.textContent = cls;
//             output.appendChild(span);
//         });
//     } else {
//         output.textContent = 'No Classes To Show';
//     }
// }

// // Event listener for adding classes
// add.addEventListener("blur", function () {
//     const classesToAdd = add.value.trim().toLowerCase().split(/\s+/);
//     if (classesToAdd[0] !== "") {
//         classesToAdd.forEach(cls => {
//             current.classList.add(cls);
//         });
//         add.value = ''; // Clear the input field
//         updateResult(); // Update the result display
//     }
// });

// // Event listener for removing classes
// remove.addEventListener("blur", function () {
//     const classesToRemove = remove.value.trim().toLowerCase().split(/\s+/);
//     if (classesToRemove[0] !== "") {
//         classesToRemove.forEach(cls => {
//             current.classList.remove(cls);
//         });
//         remove.value = ''; // Clear the input field
//         updateResult(); // Update the result display
//     }
// });

// // Initial call to display the current classes
// updateResult();
//! Assignment 3
{
	/* <div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div> */
}
// document.querySelector("p").remove();
// let theDiv = document.querySelector(".our-element");
// let previousDiv = document.createElement("div");
// previousDiv.className = "start";
// previousDiv.title = "Start Element";
// previousDiv.setAttribute("data-value", "start");
// previousDiv.textContent = "Start";
// console.log(previousDiv);
// // document.body.prepend(previousDiv)
// let nextDiv = document.createElement("div");
// nextDiv.className = "end";
// nextDiv.title = "End Element";
// nextDiv.setAttribute("data-value", "End");
// nextDiv.textContent = "End";
// document.body.prepend(previousDiv, theDiv, nextDiv);
//! Assignment 4
// let div = document.querySelector("div");
// let span = document.querySelector("span");

// let comment = span.nextSibling;
// let comment2 = comment.nextSibling;
// let string = comment2.nextSibling;
// let theString = string.textContent.trim();

// span.remove();
// comment.remove();
// comment2.remove();
//! Assignment 5
// const elements = document.querySelectorAll("div, span, p, articel, section");
// elements.forEach((element) => {
// 	element.addEventListener("click", function () {
// 		console.log(`This is ${element.tagName.toLocaleLowerCase()}`);
// 	});
// });
