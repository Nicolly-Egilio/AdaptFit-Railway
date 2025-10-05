function irPagina(id) { //rola ate a pag desejada
  let elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({ behavior: "smooth" });
  }
}


document.getElementById('contatoForm')?.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário
  alert('E-mail enviado com sucesso!');
  this.reset(); // Limpa o formulário
});


let modoLeituraAtivo = false;

const botaoLeitor = document.getElementById('leitor');
const icone = botaoLeitor.querySelector('img');

botaoLeitor.addEventListener('click', () => {
  modoLeituraAtivo = !modoLeituraAtivo;

  botaoLeitor.style.backgroundColor = modoLeituraAtivo ? '#000080' : '#000080';

  botaoLeitor.setAttribute('aria-label', modoLeituraAtivo ? 'Parar leitor de tela' : 'Ativar leitor de tela');
  botaoLeitor.setAttribute('title', modoLeituraAtivo ? 'Parar leitor de tela' : 'Ativar leitor de tela');

  icone.src = modoLeituraAtivo ? '../assets/imagens/x.png' : '../assets/imagens/olho.png';
});

document.addEventListener('click', function (e) {

  if (!modoLeituraAtivo || e.target.closest('#leitor')) return;

  const texto = e.target.innerText || e.target.alt || e.target.ariaLabel;

  if (texto) {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    speechSynthesis.speak(utterance);
  }
});

//dark mode
 const chk = document.getElementById('chk');

  // Verifica o localStorage ao carregar a página
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    chk.checked = true; // mantém a caixa marcada
  }

  chk.addEventListener('change', () => {
    if (chk.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled'); // salva a escolha
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled'); // salva a escolha
    }
  });

//carrossel
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');

  const offset = -currentSlide * 100;
  slides.forEach(slide => {
  slide.style.transform = `translateX(${offset}%)`;
  });
}

function autoSlide() {
  moveSlide(1); 
}

// intervalo automatico de 4 segundos
setInterval(autoSlide, 4000); 
