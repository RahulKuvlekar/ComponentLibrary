const openModalButton = document.querySelector(".open-btn");
const closeModalButtons = document.querySelectorAll(".close-btn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
