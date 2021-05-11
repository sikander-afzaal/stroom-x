const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const display = document.querySelector("#display");
console.log(parseInt(display.innerText) + 1);
add.addEventListener("click", () => {
  display.innerText = parseInt(display.innerText) + 1;
});
subtract.addEventListener("click", () => {
  if (parseInt(display.innerText) > 0) {
    display.innerText = parseInt(display.innerText) - 1;
  }
});
const add1 = document.querySelector("#add1");
const subtract1 = document.querySelector("#subtract1");
const display1 = document.querySelector("#display1");
console.log(parseInt(display1.innerText) + 1);
add1.addEventListener("click", () => {
  display1.innerText = parseInt(display1.innerText) + 1;
});
subtract1.addEventListener("click", () => {
  if (parseInt(display1.innerText) > 0) {
    display1.innerText = parseInt(display1.innerText) - 1;
  }
});
