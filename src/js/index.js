// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista

// passo 1 - dar um jeito de pegar o elemnto HTML da seta avançar

const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function (){
        const cartaVirada = cartao.querySelector(".carta-virada")
        
        //virar o cartao
        cartao.classList.toggle("virar"); //toggle é para alternar a classe, então quando ele ver que já tem a classe e o usuário apertar, ele vai tirar
        //mostrar fundo da carta
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });
})

// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    // passo 4 - buscar o cartão que está selecioando e esconder
    esconderCartaoSelecionado(); //foi refatorado

    // passo 3 - fazer aparecer o próximo cartão da lista
    cartaoAtual++;
    mostrarCartao(cartaoAtual); //foi refatorado
});

/*OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
 - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
 - passo 3 - fazer aparecer o cartão anterior da lista
 - passo 4 - buscar o cartão que está selecionado e esconder
 */

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

