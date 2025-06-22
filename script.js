document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('projectIdea');
  const charCount = document.getElementById('charCount');
  const sendBtn = document.getElementById('sendWhatsappBtn');
  const maxLength = 500;
  const whatsappNumber = '5511999999999'; // substitua pelo seu número com código do país (ex: 55 para Brasil)

  // Atualiza contagem de caracteres ao digitar
  textarea.addEventListener('input', () => {
    const remaining = maxLength - textarea.value.length;
    charCount.textContent = `${remaining} caracteres restantes`;
  });

  // Envia mensagem para WhatsApp ao clicar no botão
  sendBtn.addEventListener('click', () => {
    const message = textarea.value.trim();
    if (message.length === 0) {
      alert('Por favor, escreva a sua ideia de projeto antes de enviar.');
      return;
    }

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);

    // Monta a URL do WhatsApp com o número e mensagem
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre o link em nova aba/janela
    window.open(whatsappURL, '_blank');
  });
});
