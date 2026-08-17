const senhaCorreta = "12345"
const btnEnviar = document.querySelector(".btnEnviar");

btnEnviar.addEventListener("click", function(){
    verificar();
})

function verificar() {
    const input = document.querySelector(".inputSenha")
    let inputValue = input.value 

    const senha = document.querySelector(".senha");
    for(let i = 0 ; i < 5; i++) {
        let number = senha.children[i]
        number.textContent = inputValue[i]

        if(inputValule[i] == senhaCorreta[i]){
            number.classList.add("certo");
        }
    }
}