const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector("#nav2");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
