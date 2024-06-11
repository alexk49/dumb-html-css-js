// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "NEW TEXT LOADED BY JS WHAT";

container.appendChild(content);

const redPara = document.createElement("p")
redPara.style.color = "red";
redPara.textContent = "Hey I'm red";
content.appendChild(redPara);

const blueHeading = document.createElement("h3");
blueHeading.style.color = "blue";
blueHeading.textContent = "I'm a blue h3!";
content.appendChild(blueHeading);

const subContainer = document.createElement("div");
subContainer.setAttribute("style", "border-style: solid, background: pink;");

const newHeading = document.createElement("h1");
newHeading.textContent = "I'm in a div";

const newPara = document.createElement("p");
newPara.textContent = "ME TOO!";

subContainer.appendChild(newHeading);
subContainer.appendChild(newPara);

container.appendChild(subContainer);
