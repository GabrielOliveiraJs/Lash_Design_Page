// Alternar o underline do link clicado na navbar
let navbarLinks = document.querySelectorAll(".navigation-link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.forEach((item) => {
      item.classList.remove("is-active");
    });

    link.classList.add("is-active");
  });
});

// Menu de hambúrguer para dispositivos móveis
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".navigation-list");
const navLinks = document.querySelectorAll(".navigation-link");

function abrirMenu() {
  navList.classList.add("is-active");
  menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}

function fecharMenu() {
  navList.classList.remove("is-active");
  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

menuToggle.addEventListener("click", () => {
  if (navList.classList.contains("is-active")) {
    fecharMenu();
  } else {
    abrirMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    fecharMenu();
  });
});

// Efeito Sticky
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
