let nav = document.querySelector("nav");

console.log(nav);

nav.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log("home page clicked");
        case 'page-one':
            console.log("page one clicked");
        case 'fake':
            console.log("fake link clicked");
    }
});
