// Find the button and paragraph by their IDs
const button = document.getElementById("myButton");
const demo = document.getElementById("demo");
button.add EventListener("click", () => {
  demo.textContent = "Nice! You’re learning JavaScript 🚀";
  demo.style.color = "#3333cc";
});
const greetButton = document.getElementById("greetButton");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
greetButton .add evenlistener("click", () => {
  const name = nameInput.value;
  if (name === "") {
    greeting.textContent = "Please enter your name 🙂";
  } else {
    greeting.textContent = "Hello, " + name + "! Welcome to my website 🚀";
  }
});
function sayHello(name) {
  console.log("Hello " + name + "!");
}
sayHello("Visitor");
sayHello(myName);
function calculateYearOfBirth(age) {
  let year = 2025 - age;
  console.log("You were born in " + year);
}
calculateYearOfBirth;
let temperature = 30;
if (temperature > 25) {
  console.log("It's hot today! 🔥");
} else if (temperature > 15) {
  console.log("Nice weather today! 🙂");
} else {
  console.log("It's cold today! ❄️");
}


