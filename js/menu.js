// === VARIÁVEIS ===
const navList = document.querySelector(".navigation-list");
const navLinks = document.querySelectorAll(".navigation-link");
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");

// === ALTERNAR O UNDERLINE DO LINK CLICADO NA NAVBAR ===
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

// === MENU HAMBÚRGUER PARA DISPOSITIVOS MÓVEIS ===
const setMenu = (open) => {
  navList.classList.toggle("is-active", open);
  hamburger.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  hamburger.setAttribute("aria-expanded", open);
  hamburger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  navList.setAttribute("aria-hidden", !open);
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

document.addEventListener("click", (event) => {
  const clickedMenu = navList.contains(event.target);
  const clickedButton = hamburger.contains(event.target);
  if (!clickedMenu && !clickedButton) {
    setMenu(false);
  }
});

hamburger.addEventListener("click", () => {
  const open = !navList.classList.contains("is-active");
  setMenu(open);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activateLink(link.dataset.page);
    setMenu(false);
  });
});

// === EFEITO STICKY ===
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
