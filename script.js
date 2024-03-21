let conta = 0
let pessoas = 0

const contaInput = document. querySelector ("#conta")
contaInput.addEventListener ("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number (evento. target.value)
}

const pessoasInput = document. querySelector ("#pessoas")
pessoasInput.addEventListener ("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoa #erro")
    const divErro = document.querySelector(".pessoa .input-box")

    if(evento.target.value === "0"){
        paragrafoErro.getElementsByClassName.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.getElementsByClassName.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.tanget.value)
    }
}
    const botoesGorjeta = document.querySelectorAll("-gorjeta input[type='button']")
    botoesGorjeta. forEach(botao => {
        botao.addEventListener ("click", receberPorcentagem)
})

    function receberPorcentagem (evento) {
        console. log(evento.target.value)

        // porcentagem = Number (evento. target. value) / 100
       // console. Log (porcentagem)
}