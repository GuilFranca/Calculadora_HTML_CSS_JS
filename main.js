const botoes = document.querySelectorAll(".botao");

const limpar = document.querySelector(".limpar");

const apagar = document.querySelector(".apagar");

const calcular = document.querySelector(".calcular");

let resultado = document.getElementById("resultado");


botoes.forEach(botao => {
    botao.addEventListener("click", function adicionar() {
        let valor = this.innerText;
        // alert(`Valor selecionado: ${valor}`);
        resultado.value = resultado.value + valor;
    })
})

limpar.addEventListener("click", function limpar() {
    resultado.value = '';
})

apagar.addEventListener("click", function apagar() {
    // resultado.value = resultado.value.substring(0, resultado.value.length - 1);
    resultado.value = resultado.value.slice(0, -1);
})

calcular.addEventListener("click", function calcular() {
    if(resultado.value) {
        resultado.value = eval(resultado.value);
    }
})