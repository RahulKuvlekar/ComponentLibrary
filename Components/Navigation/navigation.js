const navPills = document.querySelectorAll(".nav-pill");
const btnBurger = document.querySelector(".burger-menu");

btnBurger.addEventListener("click", () => {
  navPills.forEach((elementTag) => {
    elementTag.classList.toggle("nav-active");
  });
});
