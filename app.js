
const navToggle = document.querySelector(".barMenu");
const navMenu = document.querySelector(".navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navMenuVisible");
});