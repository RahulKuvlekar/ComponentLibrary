const openBtn = document.getElementById("show-toast-btn");
const closeBtn = document.getElementById("close-toast-btn");
const toastContainer = document.querySelector(".toast-container");

openBtn.addEventListener("click", () => {
  toastContainer.classList.add("active");
  setTimeout(() => {
    toastContainer.classList.remove("active");
  }, 3000);
});

closeBtn.addEventListener("click", (e) => {
  toastContainer.classList.remove("active");
});
