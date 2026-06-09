const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const produto = data.produtos.find(function (elem) { return elem.id === id });
let tela = document.getElementById('textProduct');
let image = document.getElementById('img')

if (produto) {
    tela.innerHTML = `<h1>${produto.nome}</h1>`
    tela.innerHTML += `<h2>preço: R$${produto.preco}</h2>`
    image.innerHTML = `<img src="${produto.imagem}">`
    tela.innerHTML += `<h2>${produto.descricao}</h2>`
    tela.innerHTML += `<h2>Categoria: ${produto.categoria}</h2>`
}
else {
    tela.innerHTML = `<p>erro</p>`
}
const gridFotos = document.getElementById("gridFotos");
data.produtos.forEach(p => {
    gridFotos.innerHTML += `
      <div class="small-card produto" data-id="${p.id}">
        <img src="${p.imagem}" alt="${p.nome}">
        <p>${p.nome}</p>
      </div>
    `;
});

document.querySelectorAll(".produto").forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = `detalhes.html?id=${card.dataset.id}`;
    });
});
