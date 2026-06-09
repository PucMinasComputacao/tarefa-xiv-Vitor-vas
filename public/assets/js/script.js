document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".produto").forEach(div => {
    div.addEventListener("click", () => {
      let id = div.dataset.id;
      window.location.href = `detalhes.html?id=${id}`;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("itemsInfo");

  data.produtos.forEach(produto => {
    container.innerHTML += `
      <div class="cards produto" data-id="${produto.id}">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div>
          <p>${produto.nome}</p>
          <p>R$${produto.preco}</p>
        </div>
      </div>
    `
    container.innerHTML += `
      <div class="cards produto" data-id="${produto.id}">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div>
          <p>${produto.nome}</p>
          <p>R$${produto.preco}</p>
        </div>
      </div>
    `
    container.innerHTML += `
      <div class="cards produto" data-id="${produto.id}">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div>
          <p>${produto.nome}</p>
          <p>R$${produto.preco}</p>
        </div>
      </div>
    `
  });

  document.querySelectorAll(".produto").forEach(div => {
    div.addEventListener("click", () => {
      let id = div.dataset.id;
      window.location.href = `detalhes.html?id=${id}`;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carouselId");

  data.produtos.forEach((produto, index) => {
    container.innerHTML += `
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
    `
  });

  document.querySelectorAll(".produto").forEach(div => {
    div.addEventListener("click", () => {
      let id = div.dataset.id;
      window.location.href = `detalhes.html?id=${id}`;
    });
  });
});