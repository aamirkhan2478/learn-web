// Add Navigation functionality
const navBtn = document.querySelector(".nav-mobile-btn");
const headerNav = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-item");

navBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});

[].forEach.call(navItem, (element) => {
  element.addEventListener("click", () => {
    headerNav.classList.remove("active");
  });
});

// Add More button functionality
const moreBtn = document.querySelector("#btn-more");
const lessBtn = document.querySelector("#btn-less");
const btn = document.querySelector(".btn-outline");
const partner = document.querySelector(".partner");
const footer = document.querySelector(".footer");
const speaker = document.querySelectorAll(".hide-card");

const showData = () => {
  partner.classList.add("show-partner");
  footer.classList.add("show-footer");
  moreBtn.classList.add("more-btn");
  lessBtn.classList.remove("less-btn");
  [].forEach.call(speaker, (element) => {
    element.classList.remove("hide-card");
  });
};

const hideData = () => {
  partner.classList.remove("show-partner");
  footer.classList.remove("show-footer");
  moreBtn.classList.remove("more-btn");
  lessBtn.classList.add("less-btn");
  [].forEach.call(speaker, (element) => {
    element.classList.add("hide-card");
  });
};

moreBtn.addEventListener("click", showData);
lessBtn.addEventListener("click", hideData);
