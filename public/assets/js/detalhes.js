const API_URL = "http://localhost:3000/produtos";

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const tela = document.getElementById("textProduct");
  const image = document.getElementById("img");
  const gridFotos = document.getElementById("gridFotos");

  try {
    // Fetch the single product by id
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Produto não encontrado");
    const produto = await res.json();

    tela.innerHTML = `
      <h1>${produto.nome}</h1>
      <h2>preço: R$${produto.preco}</h2>
      <h2>${produto.descricaoCompleta || produto.descricao}</h2>
      <h2>Categoria: ${produto.categoria}</h2>
    `;
    image.innerHTML = `<img src="${produto.imagem}">`;

  } catch (err) {
    tela.innerHTML = `<p>erro</p>`;
    console.error(err);
  }

  // Fetch all products for the "other photos" grid
  try {
    const res = await fetch(API_URL);
    const produtos = await res.json();

    let gridHtml = "";
    produtos.forEach(p => {
      gridHtml += `
        <div class="small-card produto" data-id="${p.id}">
          <img src="${p.imagem}" alt="${p.nome}">
          <p>${p.nome}</p>
        </div>
      `;
    });
    gridFotos.innerHTML = gridHtml;

    document.querySelectorAll(".produto").forEach(card => {
      card.addEventListener("click", () => {
        window.location.href = `detalhes.html?id=${card.dataset.id}`;
      });
    });

  } catch (err) {
    console.error("Erro ao buscar grid de produtos:", err);
  }
});