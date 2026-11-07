document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("primary-navigation");

function closeNavigation({ returnFocus = false } = {}) {
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.querySelector(".sr-only").textContent = "Open navigation";
  navLinks.classList.remove("is-open");
  if (returnFocus) navToggle.focus();
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeNavigation();
  } else {
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.querySelector(".sr-only").textContent = "Close navigation";
    navLinks.classList.add("is-open");
    navLinks.querySelector("a").focus();
  }
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
    closeNavigation({ returnFocus: true });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) closeNavigation();
});
