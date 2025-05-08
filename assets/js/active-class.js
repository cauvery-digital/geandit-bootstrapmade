
const page = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".navmenu a");

window.addEventListener("DOMContentLoaded", () => {
  links.forEach((link) => {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
