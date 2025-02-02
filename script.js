const botaoVoce = document.getElementById("botaoVoce");
const botaoEu = document.getElementById("botaoEu");
const mensagem = document.getElementById("mensagem");

botaoVoce.addEventListener("touchstart", fugir);  // Para toque na tela (celular)
botaoVoce.addEventListener("mouseover", fugir);   // Para mouse (PC)

botaoEu.addEventListener("click", () => {
    mensagem.textContent = "Você tá certa";
});

function fugir() {
    const larguraJanela = window.innerWidth - botaoVoce.offsetWidth;
    const alturaJanela = window.innerHeight - botaoVoce.offsetHeight;
    
    const novaPosicaoX = Math.random() * larguraJanela;
    const novaPosicaoY = Math.random() * alturaJanela;

    botaoVoce.style.position = "absolute";
    botaoVoce.style.left = `${novaPosicaoX}px`;
    botaoVoce.style.top = `${novaPosicaoY}px`;
}
