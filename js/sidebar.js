const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    if (burger.classList.contains("burger-active")) {
        burger.classList.remove("burger-active");
        sidebar.classList.remove("sidebar-active");
        setTimeout(() => {
            sidebar.style.display = "none";
        }, 300);
    } else {
        burger.classList.add("burger-active");
        sidebar.style.display = "flex";
        setTimeout(() => {
            sidebar.classList.add("sidebar-active");
        }, 1);
    }
})