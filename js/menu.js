// Variáveis
const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".navigation-list");
const navLinks = document.querySelectorAll(".navigation-link");
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const header = document.querySelector("header");

// Alternar o underline do link clicado na navbar
const removeActiveLinks = () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
};

const activateLink = (page) => {
  removeActiveLinks();

  navLinks.forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
};

const getCurrentPage = () => {
  switch (currentPage) {
    case "index.html":
      return "home";
    case "about-the-course.html":
      return "course";
    case "lash-service.html":
      return "styles";
    case "products-page.html":
      return "products";
    default:
      return "home";
  }
};

activateLink(getCurrentPage());

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
  link.addEventListener("click", () => {
    activateLink(link.dataset.page);
    closeMenu();
  });
});

// Efeito Sticky
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
