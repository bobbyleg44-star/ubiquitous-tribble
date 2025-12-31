// Find the button and paragraph by their IDs
const button = document.getElementById('myButton');
const demo = document.getElementById('demo');

// When the button is clicked, change the text
button.addEventListener('click', () => {
    demo.textContent = "You just clicked the button! 🎉";
});
