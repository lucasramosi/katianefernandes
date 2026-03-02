document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões de pergunta
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(function (question) {
    question.addEventListener("click", function () {
      // Alterna a classe 'active' para mudar o estilo do botão e girar o ícone
      this.classList.toggle("active");

      // Pega o elemento da resposta que está logo abaixo da pergunta
      const answer = this.nextElementSibling;

      // Se a resposta estiver aberta, fecha. Se estiver fechada, abre.
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

const modal = document.getElementById("modalOverlay");

function toggleModal() {
  // Alterna a exibição do modal entre 'flex' e 'none'
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function enviarWhatsApp() {
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  // Validação simples
  if (nome === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Configurações
  const telefone = "5565999771772"; // SUBSTITUA PELO SEU NÚMERO (DDI + DDD + NÚMERO)

  // Monta a mensagem personalizada
  const textoFinal = `Olá, meu nome é ${nome}. \n\n${mensagem}`;

  // Codifica o texto para URL
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(textoFinal)}`;

  // Abre o WhatsApp em uma nova aba
  window.open(url, "_blank");

  //Limpa o formulário depois de enviar a mensagem

  // Fecha o modal após enviar
  toggleModal();
}

// Fechar modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target == modal) {
    toggleModal();
  }
};
