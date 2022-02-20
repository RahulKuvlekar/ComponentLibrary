const openBtn = document.getElementById("show-toast-btn");
const toastContainer = document.querySelector(".toast-container");
const closeBtn = document.querySelector(".close-toast-button");

openBtn.addEventListener("click", () => {
  toastContainer.classList.add("active");
  setTimeout(() => {
    toastContainer.classList.remove("active");
  }, 4000);
});

closeBtn.addEventListener("click", () => {
  toastContainer.classList.remove("active");
});
