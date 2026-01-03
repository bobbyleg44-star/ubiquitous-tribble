// Find the button and paragraph by their IDs
const button = document.getElementById("myButton");
const demo = document.getElementById("demo");

button.addEventListener("click", () => {
  demo.textContent = "Nice! You’re learning JavaScript 🚀";
  demo.style.color = "#3333cc";
});
const greetButton = document.getElementById("greetButton");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", () => {
  const name = nameInput.value;

  if (name === "") {
    greeting.textContent = "Please enter your name 🙂";
  } else {
    greeting.textContent = "Hello, " + name + "! Welcome to my website 🚀";
  }
});

