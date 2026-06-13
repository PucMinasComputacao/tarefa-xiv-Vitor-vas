const API_URL = "http://localhost:3000/produtos";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(API_URL);
    const produtos = await res.json();

    // Render info cards
    const itemsContainer = document.getElementById("itemsInfo");
    let itemsHtml = "";
    produtos.forEach(produto => {
      itemsHtml += `
        <div class="cards produto" data-id="${produto.id}">
          <img src="${produto.imagem}" alt="${produto.nome}">
          <div>
            <p>${produto.nome}</p>
            <p>R$${produto.preco}</p>
          </div>
        </div>
      `;
    });
    itemsContainer.innerHTML = itemsHtml;

    // Render carousel
    const carouselContainer = document.getElementById("carouselId");
    let carouselHtml = "";
    produtos.forEach((produto, index) => {
      carouselHtml += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div id="insideCarousel" class="d-flex align-items-center justify-content-center bg-black w-100" style="height: 500px;">
            <img src="${produto.imagem}" alt="${produto.nome}" style="object-fit: contain;">
            <div class="carousel-text text-white ms-md-5">
              <h2>${produto.nome}</h2>
              <p>${produto.descricao}</p>
              <button class="btn btn-outline-light produto" data-id="${produto.id}">Ver produto</button>
            </div>
          </div>
        </div>
      `;
    });
    carouselContainer.innerHTML = carouselHtml;

    // Attach click listeners once, after both renders
    document.querySelectorAll(".produto").forEach(el => {
      el.addEventListener("click", () => {
        const id = el.dataset.id;
        window.location.href = `detalhes.html?id=${id}`;
      });
    });

  } catch (err) {
    console.error("Erro ao buscar produtos:", err);
  }
});