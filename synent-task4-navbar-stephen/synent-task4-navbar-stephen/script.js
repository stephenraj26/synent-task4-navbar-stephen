// Open and close the mobile menu

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

// Click the hamburger to toggle
menuBtn.addEventListener("click", function () {
  setMenu(!menu.classList.contains("open"));
});

// Close the menu after a link is clicked
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () { setMenu(false); });
});

// Close with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") { setMenu(false); }
});

// If the window becomes wide again, reset the menu
window.addEventListener("resize", function () {
  if (window.innerWidth > 720) { setMenu(false); }
});
