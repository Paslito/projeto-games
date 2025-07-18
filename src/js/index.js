const botoes = document.querySelectorAll(".botao")
const jogos = document.querySelectorAll(".jogo")

botoes.forEach((botao, indece) => {
    botao.addEventListener("click", () =>{
        const botaoSelecionado = document.querySelector(".botao.selecionado")
        botaoSelecionado.classList.remove("selecionado")
        botao.classList.add("selecionado")

        const jogoSelecionado = document.querySelector(".jogo.selecionado")
        jogoSelecionado.classList.remove("selecionado")
        jogos[indece].classList.add("selecionado")

    })
})
