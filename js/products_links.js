const cardsContainer = document.querySelector(".cards-grid");
const cardTemplate = document.querySelector("#card-template");
const searchInput = document.querySelector("#product-search");
const clearSearchBtn = document.querySelector(".clear-search");
let productsList = [];
const productsCount = document.querySelector("#products-count");
const emptyProducts = document.querySelector("#empty-products");

// === CARREGAR OS PRODUTOS DOS PRODUTOS DO ARQUIVO JSON ===
async function loadData() {
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

// === CRIAR OS CARDS COM OS DADOS DOS PRODUTOS E RENDERIZAR ===
async function initializePage() {
  productsList = await loadData();
  renderCards(productsList);
}

const renderCards = (products) => {
  cardsContainer.replaceChildren();

  products.forEach((product) => {
    const card = cardTemplate.content.cloneNode(true);

    card.querySelector(".product-card-image").src = product.imagem;
    card.querySelector(".product-card-image").alt = product.nome;
    card.querySelector(".card-title").textContent = product.nome;
    card.querySelector(".card-description").textContent = product.descricao;
    card.querySelector(".card-tag").textContent = product.recomendacao;
    card.querySelector(".card-link").href = product.link;

    cardsContainer.appendChild(card);
  });
  //SOMA A QUANTIDADE DE PRODUTOS ENCONTRADOS NA PESQUISA
  productsCount.textContent = products.length;
};

// === FUNÇÃO PARA NORMALIZAR (FORMATAR) O TEXTO BUSCADO ===
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

// === FUNÇÃO PARA ALTERNAR O BOTÃO DE LIMPAR INPUT ===
const toggleBtnClearInput = (event) => {
  const searchedParameter = normalizeText(event.target.value);

  if (searchedParameter.length > 0) {
    clearSearchBtn.classList.add("visible");
  } else {
    clearSearchBtn.classList.remove("visible");
  }

  searchProducts(searchedParameter);
};

searchInput.addEventListener("input", toggleBtnClearInput);

// === BUSCAR PRODUTOS DE ACORDO COM O PARÂMETRO ===
const searchProducts = (searchedParameter) => {
  const filteredProducts = productsList.filter((product) => {
    const productName = normalizeText(product.nome);
    const productDescription = normalizeText(product.descricao);

    return (
      productName.includes(searchedParameter) ||
      productDescription.includes(searchedParameter)
    );
  });
  //CHAMA A LISTA DE PRODUTOS FILTRADA
  renderCards(filteredProducts);

  //MOSTRA OU ESCONDE O TEXTO DE NENHUM PRODUTO ENCONTRADO
  toggleEmptyProducts(filteredProducts);
};

// === FUNÇÃO DO BOTÃO PARA LIMPAR O INPUT ===
const clearSearch = () => {
  searchInput.value = "";
  renderCards(productsList);
  toggleEmptyProducts(productsList);
  clearSearchBtn.classList.remove("visible");
  searchInput.focus();
};

clearSearchBtn.addEventListener("click", clearSearch);

// === FUNÇÃO PARA ALTERNAR O TEXTO DE NENHUM PRODUTO ENCONTRADO ==
const toggleEmptyProducts = (products) => {
  if (products.length === 0) {
    emptyProducts.classList.add("active");
  } else {
    emptyProducts.classList.remove("active");
  }
};

initializePage();
