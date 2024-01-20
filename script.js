const header = document.querySelector(".navbar");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
    header.style.position = window.scrollY > 36 ? "fixed" : "relative";
    header.style.top = window.scrollY > 36 ? "0" : "";
    main.classList.toggle("margin", window.scrollY > 36);
});

function toggleIcon(clickedElement) {
    document.querySelectorAll('.menu-item').forEach(function (element) {
        if (element !== clickedElement) {
            const icon = element.querySelector('.icon');
            icon.classList.remove('rotate-icon');
        }
    });
    const clickedIcon = clickedElement.querySelector('.icon');
    clickedIcon.classList.toggle('rotate-icon');
}
