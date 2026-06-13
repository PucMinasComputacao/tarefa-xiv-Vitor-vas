const API_URL = "http://localhost:3000/produtos";

document.addEventListener("DOMContentLoaded", async () => {
  const calendarEl = document.getElementById("calendar");

  try {
    const res = await fetch(API_URL);
    const produtos = await res.json();

    const eventos = produtos.map(produto => ({
      id: produto.id,
      title: produto.nome,
      start: produto.dataEvento,
      color: produto.emEstoque ? "#198754" : "#dc3545",
      extendedProps: {
        preco: produto.preco,
        descricao: produto.descricao,
        imagem: produto.imagem,
        categoria: produto.categoria,
        emEstoque: produto.emEstoque
      }
    }));

    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      locale: "pt-br",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek"
      },
      events: eventos,
      eventClick: function (info) {
        window.location.href = `detalhes.html?id=${info.event.id}`;
      }
    });

    calendar.render();

  } catch (err) {
    console.error("Erro ao buscar eventos:", err);
  }
});