// Alternar o underline do link clicado na navbar
let navbarLinks = document.querySelectorAll(".navigation-link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// Menu de hambúrguer para dispositivos móveis
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".navigation-list");
const navLinks = document.querySelectorAll(".navigation-link");

function abrirMenu() {
  navList.classList.add("active");
  menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}

function fecharMenu() {
  navList.classList.remove("active");
  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

menuToggle.addEventListener("click", () => {
  if (navList.classList.contains("active")) {
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

