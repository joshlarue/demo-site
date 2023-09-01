// code is from mdn docs https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
// however, I am writing it from memory/as my own to try to grasp js concepts

// index.html
const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("keydown", (event) => {
    output.textContent = `you pressed "${event.key}"`;
});
