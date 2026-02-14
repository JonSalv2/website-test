const header = document.querySelector(".site-header");
const btn = document.querySelector(".menu-toggle");

btn.addEventListener("click", () => {
  const open = header.classList.toggle("nav-open");
  btn.textContent = open ? "✕" : "☰";
});