//! Assignment 2 
let add = document.querySelector("input.classes-to-add");
let remove = document.querySelector("input.classes-to-remove");
let output = document.querySelector(".output");
let current = document.querySelector('div[title="Current"]');

// Function to update the result output
function updateResult() {
    const classList = Array.from(current.classList).sort();
    output.innerHTML = ''; // Clear previous output
    if (classList.length > 0) {
        classList.forEach(cls => {
            let span = document.createElement('span');
            span.textContent = cls;
            output.appendChild(span);
        });
    } else {
        output.textContent = 'No Classes To Show';
    }
}

// Event listener for adding classes
add.addEventListener("blur", function () {
    const classesToAdd = add.value.trim().toLowerCase().split(/\s+/);
    if (classesToAdd[0] !== "") {
        classesToAdd.forEach(cls => {
            current.classList.add(cls);
        });
        add.value = ''; // Clear the input field
        updateResult(); // Update the result display
    }
});

// Event listener for removing classes
remove.addEventListener("blur", function () {
    const classesToRemove = remove.value.trim().toLowerCase().split(/\s+/);
    if (classesToRemove[0] !== "") {
        classesToRemove.forEach(cls => {
            current.classList.remove(cls);
        });
        remove.value = ''; // Clear the input field
        updateResult(); // Update the result display
    }
});

// Initial call to display the current classes
updateResult();
