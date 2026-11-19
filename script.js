// =====================================================
// Task 1: The "document" object
// =====================================================

// Read information about the page
console.log(document.title);            // page title
console.log(document.URL);              // full page URL
console.log(document.body);             // the <body> element
console.log(document.documentElement);  // the whole <html> element

// Change the page title (look at the browser tab)
document.title = "Learn DOM - changed by JavaScript";

// Find elements
const myDiv = document.getElementById("myDiv");
const listItems = document.querySelectorAll("#myList li");
console.log("Number of list items:", listItems.length);

// Change content (innerHTML allows HTML tags, textContent only text)
myDiv.innerHTML = "<strong>This div was changed by JavaScript!</strong>";

// Change styles
myDiv.style.color = "blue";
myDiv.style.backgroundColor = "lightyellow";
myDiv.style.padding = "10px";

// Read and set attributes
console.log(myDiv.getAttribute("id"));         // "myDiv"
myDiv.setAttribute("title", "I am a tooltip"); // hover over the div!

// Create a new heading and add it to the top of the page
const heading = document.createElement("h1");
heading.textContent = "Hello DOM!";
document.body.prepend(heading);

// Create a button and add it to the bottom of the page
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// Listen for events
button.addEventListener("click", () => {
    myDiv.textContent = "You clicked the button!";
});

// Remove an element: the last list item
const lastItem = document.querySelector("#myList li:last-child");
lastItem.remove();