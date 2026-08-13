const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");

const frasesMotivacionais = [
    "Deus tem um propósito lindo para a sua vida.",
    "Você é filha de Deus, amada, escolhida e preciosa.",
    "Confie em Deus, mesmo quando não entender o caminho.",
    "Sua força vem do Senhor.",
    "Deus nunca abandona você.",
    "Não tenha medo do futuro; Deus já está lá.",
    "Sua identidade está em Cristo, não na opinião das pessoas.",
    "Você foi criada com propósito e não por acaso.",
    "Continue firme, Deus está cuidando de tudo.",
    "Ore, confie e nunca desista da sua fé."
];

function mostrarFrase() {
    fraseTexto.textContent = Math.floor(Math.random() * frasesMotivacionais.length);
    fraseTexto.textContent = frases [indice];
}

btnFrase.addEventListener("click", function () {
    mostrarFrase();
});