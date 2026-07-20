// Variáveis
const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".navigation-list");
const navLinks = document.querySelectorAll(".navigation-link");
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const currentHash = window.location.hash;
const header = document.querySelector("header");

// Alternar o underline do link clicado na navbar
navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href.includes("#")) {
    if (href.endsWith(currentHash) && currentHash !== "") {
      link.classList.add("active");
    }
    return;
  }
  const pageName = href.split("/").pop();
  if (pageName === currentPage && currentHash === "") {
    link.classList.add("active");
  }
});

// Menu de hambúrguer para dispositivos móveis
function openMenu() {
  navList.classList.add("is-active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuIcon.classList.remove("fa-bars");
  menuIcon.classList.add("fa-xmark");
}

function closeMenu() {
  navList.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars");
}

menuToggle.addEventListener("click", () => {
  if (navList.classList.contains("is-active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Efeito Sticky
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
