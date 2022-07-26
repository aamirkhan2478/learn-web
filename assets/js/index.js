const navBtn = document.querySelector(".nav-mobile-btn");
const headerNav = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-item");

navBtn.addEventListener("click", () => {
    headerNav.classList.toggle("active");
});

[].forEach.call(navItem, (element)=>{
    element.addEventListener("click", () => {
        headerNav.classList.remove("active");
    })
})