const shoppingList = document.querySelector("ul");
const inputField = document.querySelector("#item");
const btn = document.querySelector("button");


function addToList() {
    const inputText = inputField.value;

    inputField.value = '';

    const listEl = document.createElement("li");
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");

    listEl.appendChild(spanEl);
    listEl.appendChild(buttonEl);

    spanEl.textContent = inputText;

    buttonEl.textContent = "Delete";
    buttonEl.setAttribute("id", "delete-button");
    
    shoppingList.appendChild(listEl);

    buttonEl.addEventListener('click', () => {
        listEl.remove();
    });

    inputField.focus()
}

btn.addEventListener("click", addToList);

inputField.focus()
