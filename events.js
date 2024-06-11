const btn = document.querySelector("#btn")

btn.onclick = () => alert("hello world");

const eventBtn = document.querySelector("#eventBtn");
btn.addEventListener("click", () => {
    alert("hello world");
});

function alertFunction() {
    alert("too many buttons...");
}

const functionBtn = document.querySelector("#functionBtn");
functionBtn.addEventListener("click", alertFunction);

// this creates a callback, the e contains an object that references the event itself. this can be modified
functionBtn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // turns button blue after click
    e.target.style.background = "blue";
});

functionBtn.addEventListener("click", function(event) {
    console.log(event.type);
}); // creates a node list that acts like an array
// for all buttons within the container id
const containerButtons = document.querySelector("#container").querySelectorAll("button");

console.log(containerButtons)

// loop through button list
containerButtons.forEach((button) => {
    // create click listener for each button
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
