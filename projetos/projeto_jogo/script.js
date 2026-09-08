const AVpalavras = [

    "CASAS",

    "CARRO",

    "LIVRO",

    "MUNDO",

    "PRAIA",

    "PEDRA",

    "NOITE",

    "TEMPO",

    "CAMPO",

    "FOLHA"

]

let AVindice = Math.floor(Math.random() * AVpalavras.length)

let AVpalavraCorreta = AVpalavras[AVindice]

const AVtabuleiro = document.querySelector(".tabuleiro")

const AVinputText = document.querySelector(".inputText")

const AVbtnEnviar = document.querySelector(".btnEnviar")

const AVcontador = document.querySelector("#tentativa")

const AVmodalVitoria = document.querySelector("#modalVitoria")

const AVmodalDerrota = document.querySelector("#modalDerrota")    

const AVfecharVitoria = document.querySelector("#fecharVitoria")

const AVfecharDerrota = document.querySelector("#fecharDerrota")

AVfecharVitoria.addEventListener("click", function() {

    AVmodalVitoria.classList.remove("ativo")

})

AVfecharDerrota.addEventListener("click", function() {

    AVmodalDerrota.classList.remove("ativo")

})

let AVtentativaAtual = 0

function AVcriarTabuleiro() {

    for(let i = 1; i <= 6; i++) {

        let AVlinha = document.createElement("div")

        AVlinha.classList.add("linhaTabuleiro")

        for(let j = 1; j <= 5; j++) {

            let AVcasa = document.createElement("div")

            AVcasa.classList.add("casa")

            AVlinha.appendChild(AVcasa)

        }

        AVtabuleiro.appendChild(AVlinha)

    }

}

AVcriarTabuleiro()

AVbtnEnviar.addEventListener("click", function() {

    AVverificarPalavra()

})

AVinputText.addEventListener("keydown", function(event) {

    if(event.key == "Enter") {

        AVverificarPalavra()

    }

})

function AVverificarPalavra() {

    let AVpalavra = AVinputText.value.trim().toUpperCase()

    const AVlinhas = document.querySelectorAll(".linhaTabuleiro")

    const AVlinhaAtual = AVlinhas[AVtentativaAtual]

    const AVcasas = AVlinhaAtual.children

    for(let i = 0; i < 5; i++) {

        AVcasas[i].textContent = AVpalavra[i]

        if(AVpalavra[i] == AVpalavraCorreta[i]) {

            AVcasas[i].classList.add("certo")

        }

        else if(AVpalavraCorreta.includes(AVpalavra[i])) {

            AVcasas[i].classList.add("presente")

        }

        else {

            AVcasas[i].classList.add("erro")

        }

    }

    AVtentativaAtual++

    AVcontador.textContent = AVtentativaAtual

    if(AVpalavra == AVpalavraCorreta) {

        AVmodalVitoria.classList.add("ativo")

    }

    else if(AVtentativaAtual == 6) {

        AVmodalDerrota.classList.add("ativo")

    }

    AVinputText.value = ""

    AVinputText.focus()

}