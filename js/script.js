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

/* Inclusão dos cards na página products */

const cardsContainer = document.querySelector(".cards-container");
const cardTemplate = document.querySelector("#card-template");

async function carregarDados() {
  try {
    const response = await fetch("../data/products.json");

    if (!response.ok) {
      throw new Error("Erro ao carregar products.json");
    }

    return await response.json();
  } catch (erro) {
    console.error(erro);
    return [];
  }
}

async function iniciar() {
  linksList = await carregarDados();

  linksList.forEach((product) => {
    const card = cardTemplate.content.cloneNode(true);

    // card.classList.remove("card-model");
    card.querySelector(".card-image").src = product.imagem;
    card.querySelector(".card-image").alt = product.nome;
    card.querySelector(".card-title").textContent = product.nome;
    card.querySelector(".card-description").textContent = product.descricao;
    card.querySelector(".card-tag").textContent = product.recomendacao
    card.querySelector(".card-link").href = product.link;

    cardsContainer.appendChild(card);
  });
}

iniciar();
