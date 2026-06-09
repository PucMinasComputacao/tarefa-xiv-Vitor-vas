document.addEventListener("DOMContentLoaded", () => {
  const calendarEl = document.getElementById("calendar");

  const eventos = data.produtos.map(produto => ({
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
      const p = info.event.extendedProps;
      window.location.href = `detalhes.html?id=${info.event.id}`;
    }
  });

  calendar.render();
});