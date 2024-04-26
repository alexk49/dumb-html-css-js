// ternary operator example from:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#ternary_operator

// run js after html has loaded:
document.addEventListener('DOMContentLoaded', function () {
    const select = document.body.querySelector("select");
    const html = document.querySelector("html");

    select.addEventListener("change", () =>
        select.value === "black"
            ? update("black", "white")
            : update("white", "black"),
    );


    function update(bgColor, textColor) {
        html.style.backgroundColor = bgColor;
        html.style.color = textColor;
    }

});

