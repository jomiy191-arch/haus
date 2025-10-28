const toggleBtn = document.getElementById("toggleBtn");
const menuAll = document.getElementById("menuAll");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  menuAll.classList.toggle("active");
});
