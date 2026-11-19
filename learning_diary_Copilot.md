# Learning Diary – Learning with GitHub Copilot

## Task 1

- I used the Copilot Chat in VS Code (in "Ask" mode, so it only answers and does not change my files) to ask what the `document` variable is and what I can do with it.
- The answers were short and well structured: a short explanation and then code examples grouped by topic (find elements, change content, change styles, create, remove, events). It also mentioned that `document` comes from the browser and not from JavaScript itself, which I did not know.
- The examples were generic and did not fit my project: Copilot used `document.querySelector("h1")` and `getElementById("main")`, but my `index.html` has neither an `<h1>` nor an element with the id `main`. I had to adapt the code to the elements that really exist (e.g. `myDiv`, `myList`).
- Copilot's answer gives a good overview, but I only really understood it after trying the code in the browser and looking at the console. Testing is important – copying blindly would not have worked.
