# Learning Diary – Learning with GitHub Copilot

## Task 1

- I used the Copilot Chat in VS Code (in "Ask" mode, so it only answers and does not change my files) to ask what the `document` variable is and what I can do with it.
- The answers were short and well structured: a short explanation and then code examples grouped by topic (find elements, change content, change styles, create, remove, events). It also mentioned that `document` comes from the browser and not from JavaScript itself, which I did not know.
- The examples were generic and did not fit my project: Copilot used `document.querySelector("h1")` and `getElementById("main")`, but my `index.html` has neither an `<h1>` nor an element with the id `main`. I had to adapt the code to the elements that really exist (e.g. `myDiv`, `myList`).
- Copilot's answer gives a good overview, but I only really understood it after trying the code in the browser and looking at the console. Testing is important – copying blindly would not have worked.

## Task 2

- This time I opened `index.html` before asking, so Copilot had it as context. The answers were much more specific: Copilot used the real id `myList` instead of generic examples like in Task 1.
- Copilot also explained *why* the code works (the script is at the end of the `<body>`), which helped me understand when JavaScript can access HTML elements.
- I found a mistake in Copilot's example: it first adds "Item 4" and then removes `lastElementChild` – which is exactly the new item. So the new item disappears immediately. I changed the order in my code.
- Lesson: giving Copilot the right context (open files) improves the answers a lot, but I still have to read the code carefully and test it.

## Task 3

- My first question was "Which parameters of this DOM element can be accessed from javascript?" – without saying which element. Copilot answered mostly about form elements (`value`, `checked`, `type`), which a `div` does not have at all.
- I started a new chat and asked again precisely: "Which parameters of the div element "myDiv" can be accessed from javascript?" Now the answer was exactly about my div, with examples using the real text "This is a div." and the right parent `<body>`.
- Lesson: a precise question with the exact element name gives much better answers. Copilot cannot guess what I mean.
- Copilot suggested `myDiv.id = "newId"` without a warning. When I tested it, `getElementById("myDiv")` returned `null` afterwards – so changing the id can break other code.
- Copilot's list was not complete: properties like `hidden`, `offsetWidth`, `contentEditable` or events were missing. I found them by testing and looking at the console myself.
