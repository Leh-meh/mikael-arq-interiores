document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById('projectIdea');
  const charCount = document.getElementById('charCount');
  const maxChars = 500;
  const button = document.getElementById('sendWhatsappBtn');
  const phoneNumber = '5511968412005';

  

  function capitalizeSentencesExceptAllCaps(text) {
    const sentences = text.match(/[^.!?]+[.!?]?/g) || [];

    return sentences.map(sentence => {
      const trimmed = sentence.trim();

      // primeira letra maiúscula + resto minúsculo
      return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    }).join(' ');
  }

  textarea.addEventListener('input', () => {
    const remaining = maxChars - textarea.value.length;
    charCount.textContent = `${remaining} caracteres restantes`;
  });

  button.addEventListener('click', () => {
    let message = textarea.value.trim();

    if (message === '') {
      alert("Por favor, escreva sua ideia de projeto antes de enviar.");
      return;
    }

    if (message.length < 50) {
      alert("Por favor, escreva pelo menos 50 caracteres sobre sua ideia de projeto.");
      return;
    }

    message = capitalizeSentencesExceptAllCaps(message);

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  });
});

// script.js

window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

// Detecta a rolagem e ativa o link correspondente
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
      // 🔥 Scroll automático
      link.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    } else {
      link.classList.remove("active");
    }
  });
});

