// Assignment.1
/*Code One (Not Working): This script tries to modify the color of the element before it exists in the DOM. Since it's placed in the <head> section, it executes before the HTML body content is loaded, so the element with the ID "el" doesn't exist yet. Therefore, it won't work.
Code Two (Working): This script waits for the entire window to load (window.onload), ensuring that all HTML content, including the element with the ID "el," is fully loaded before attempting to modify it. This approach ensures that the script will work as intended.
Code Three (Working): This script is placed at the end of the <body> section, so it executes after the HTML content above it is loaded. By the time this script runs, the element with the ID "el" exists in the DOM, so it will successfully change its color. */

// Assignment.2
document.getElementById("el").style.cssText =
	"color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;";
