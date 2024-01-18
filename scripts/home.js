const navItems = document.querySelector(".nav-items");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-items>a");
let left = -999;
hamburger.addEventListener("click", () => {
  if (left === -999) {
    navItems.style.left = "0px";
    left = 0;
  } else {
    navItems.style.left = "-999px";
    left = -999;
  }
});
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    if (left === -999) {
      navItems.style.left = "0px";
      left = 0;
    } else {
      navItems.style.left = "-999px";
      left = -999;
    }
  });
});
