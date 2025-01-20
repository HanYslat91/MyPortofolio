//Toggle and Responsive Navigation
const navActivation = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navActivation();

// Clear Form Before Unload
console.log("hello world");
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}
