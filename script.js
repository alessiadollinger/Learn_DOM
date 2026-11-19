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
// =====================================================
// Task 2: Accessing and changing the list "myList"
// =====================================================

// Access the list (two ways)
const myList = document.getElementById("myList");
const sameList = document.querySelector("#myList");
console.log(myList === sameList); // true - both find the same element

// Access the list items and print their text
const items = myList.querySelectorAll("li");
items.forEach(item => {
    console.log(item.textContent);
});

// Change an existing item (the first one)
myList.querySelector("li").textContent = "Updated item";

// Remove an item FIRST (the last one) ...
myList.lastElementChild.remove();

// ... THEN add new items, so they are not removed directly again
const newItem = document.createElement("li");
newItem.textContent = "Item 4 (added by JavaScript)";
myList.appendChild(newItem);

const anotherItem = document.createElement("li");
anotherItem.textContent = "Item 5 (added by JavaScript)";
myList.appendChild(anotherItem);

// Change list styling
myList.style.color = "blue";

// Interactive: click on an item to cross it out
myList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
        event.target.style.textDecoration =
            event.target.classList.contains("done") ? "line-through" : "none";
    }
});


// =====================================================
// Task 3: The div element (myDiv)
// =====================================================
// myDiv was already selected in Task 1:
// const myDiv = document.getElementById("myDiv");

// --- Read basic properties ---
console.log(myDiv.tagName);       // "DIV"
console.log(myDiv.id);            // "myDiv"
console.log(myDiv.attributes);    // all HTML attributes of the div
console.log(myDiv.parentElement); // <body>

// --- Content: textContent vs innerHTML vs innerText ---
console.log(myDiv.textContent);   // only text
console.log(myDiv.innerHTML);     // text including HTML tags
console.log(myDiv.innerText);     // text as visible on the page

// --- Change the id (careful!) ---
myDiv.id = "newId";
console.log(document.getElementById("myDiv")); // null - not found anymore!
myDiv.id = "myDiv";                            // change it back

// --- CSS classes ---
console.log(myDiv.className);       // "" - no class at the beginning
myDiv.classList.add("highlight");
myDiv.classList.add("box");
console.log(myDiv.className);       // "highlight box"
console.log(myDiv.classList.contains("box")); // true

// --- Styles ---
myDiv.style.border = "2px solid blue";
myDiv.style.borderRadius = "10px";
myDiv.style.width = "300px";

// --- Attributes: tooltip ---
myDiv.setAttribute("title", "I am a tooltip");
console.log(myDiv.getAttribute("title")); // "I am a tooltip"

// --- Children: add a span inside the div ---
const span = document.createElement("span");
span.textContent = " (I am a span inside the div)";
myDiv.appendChild(span);
console.log(myDiv.children);          // HTMLCollection with the span
console.log(myDiv.children.length);   // 1

// --- Extra (found by testing myself, not in Copilot's answer) ---
console.log("Width:", myDiv.offsetWidth, "Height:", myDiv.offsetHeight);
myDiv.contentEditable = "true";  // you can click into the div and type

// --- Events: change color on mouse hover ---
myDiv.addEventListener("mouseover", () => {
    myDiv.style.backgroundColor = "lightgreen";
});
myDiv.addEventListener("mouseout", () => {
    myDiv.style.backgroundColor = "lightyellow";
});

// --- Hide / show the div with a button ---
const toggleButton = document.createElement("button");
toggleButton.textContent = "Hide / show div";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    myDiv.hidden = !myDiv.hidden;   // true = hidden, false = visible
});