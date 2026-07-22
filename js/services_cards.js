// ==========================================================
// Seleção dos elementos
// ==========================================================
const servicesGrid = document.querySelector(".services-grid");
const serviceTemplate = document.querySelector("#service-template");

let servicesList = [];

// ==========================================================
// Carregar os dados do JSON
// ==========================================================
async function loadData() {
  try {
    const response = await fetch("../data/lash-services.json");

    if (!response.ok) {
      throw new Error("Erro ao carregar lash-services.json");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// ==========================================================
// Inicializar página
// ==========================================================
async function initializePage() {
  servicesList = await loadData();

  renderCards(servicesList);
}

// ==========================================================
// Renderizar cards
// ==========================================================
function renderCards(services) {
  servicesGrid.replaceChildren();

  services.forEach((service) => {
    const card = serviceTemplate.content.cloneNode(true);

    card.querySelector(".service-card-image").src = service.imagem;

    card.querySelector(".service-card-image").alt = service.nome;

    card.querySelector(".service-price").textContent = service.preco;

    card.querySelector(".service-category").textContent = service.categoria;

    card.querySelector(".service-title").textContent = service.nome;

    card.querySelector(".service-description").textContent = service.descricao;

    card.querySelector(".service-duration").textContent =
      `Duração: ${service.duracao}`;

    card.querySelector(".service-maintenance").textContent =
      `Manutenção: ${service.manutencao}`;

    card.querySelector(".service-effect").textContent =
      `Efeito: ${service.efeito}`;

    servicesGrid.appendChild(card);
  });
}

// ==========================================================
// Inicialização
// ==========================================================
initializePage();
