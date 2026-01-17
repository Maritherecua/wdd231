const iconMenu = document.querySelector("#icon-menu");
const navLinks = document.querySelector(".nav-links");

iconMenu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    iconMenu.classList.toggle("open");
});
