// Find the button and paragraph by their IDs
const button = document.getElementById("myButton");
const demo = document.getElementById("demo");

button.addEventListener("click", () => {
  demo.textContent = "Nice! You’re learning JavaScript 🚀";
  demo.style.color = "#3333cc";
});

