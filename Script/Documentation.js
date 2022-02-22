const sidebar = document.getElementById("nav-sidebar");
const burgerMenu = document.getElementById("doc-burgerMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  sidebar.classList.toggle("active");
});
