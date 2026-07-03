/* Inclusão dos cards na página products */
const cardsContainer = document.querySelector(".cards-grid");
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
    card.querySelector(".product-card-image").src = product.imagem;
    card.querySelector(".product-card-image").alt = product.nome;
    card.querySelector(".card-title").textContent = product.nome;
    card.querySelector(".card-description").textContent = product.descricao;
    card.querySelector(".card-tag").textContent = product.recomendacao;
    card.querySelector(".card-link").href = product.link;

    cardsContainer.appendChild(card);
  });
}

iniciar();
