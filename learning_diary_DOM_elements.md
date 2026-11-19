# Learning Diary – DOM Elements

## Task 1: The `document` object

- `document` is a global object that represents the web page loaded in the browser. It gives access to the HTML through the DOM (Document Object Model).
- `document` is not part of JavaScript itself – it is provided by the browser. In Node.js it does not exist.
- I can read information about the page, e.g. `document.title`, `document.URL`, `document.body` or `document.documentElement` (the whole `<html>` element).
- I can find elements with `document.getElementById("id")`, `document.querySelector("css-selector")` (first match) or `document.querySelectorAll(...)` (all matches).
- I can change content with `textContent` (plain text) or `innerHTML` (text with HTML tags), styles with `element.style.color = "..."` and attributes with `setAttribute` / `getAttribute`.
- I can create new elements with `document.createElement("button")`. They only become visible after adding them to the page with `appendChild()`, `append()` or `prepend()`. With `element.remove()` I can delete elements.
- With `addEventListener("click", ...)` I can react to user actions, e.g. a button click.

**My code:** changed the page title, changed text and style of `myDiv`, added a heading at the top and a button that changes the div text when clicked, removed the last list item.

## Task 2: The list `myList`

- I can access the list via its id with `document.getElementById("myList")` or with `document.querySelector("#myList")` – both return the same element.
- The list items can be selected with `myList.querySelectorAll("li")`. This returns a NodeList, which I can loop through with `forEach`.
- `myList.querySelector("li")` only returns the first item; `myList.lastElementChild` returns the last one.
- I can change an item with `textContent`, add a new item with `document.createElement("li")` + `myList.appendChild(...)` and delete one with `.remove()`.
- The order of the changes matters: if I first add an item and then remove the last item, the new item is removed again.
- I can style the whole list with `myList.style.color` and make it interactive with one `addEventListener("click", ...)` on the `<ul>`. `event.target` tells me which `<li>` was clicked (event delegation).
- The script works because `<script src="script.js">` is at the end of the `<body>`, so the list already exists when the JavaScript runs.

**My code:** changed the first item, removed the last item, added two new items, colored the list blue, clicking an item crosses it out.
