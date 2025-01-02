// Data em que vocês se conheceram (10 de agosto)
const dataInicio = new Date("2024-06-10T00:00:00");

// Função para atualizar o contador
function atualizarRelogio() {
    const agora = new Date();
    const diferenca = agora - dataInicio;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    const contador = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    document.getElementById("contador").textContent = contador;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Slideshow automático
let slideAtual = 0;
const slides = document.querySelectorAll(".slideshow img");

function mudarSlide() {
    slides[slideAtual].classList.remove("ativo");
    slideAtual = (slideAtual + 1) % slides.length;
    slides[slideAtual].classList.add("ativo");
}

// Troca o slide a cada 3 segundos
setInterval(mudarSlide, 3000);
