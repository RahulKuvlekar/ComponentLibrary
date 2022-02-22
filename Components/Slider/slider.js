const slider = document.querySelector(".slider");
const output = document.querySelector(".output-end");
output.textContent = slider.value;

slider.addEventListener("input", () => {
  output.textContent = slider.value;
});
