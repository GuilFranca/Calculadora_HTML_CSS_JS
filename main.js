const botoes = document.querySelectorAll(".botao");

const limparClick = document.querySelector(".limpar");

const apagar = document.querySelector(".apagar");

const calcularClick = document.querySelector(".calcular");

let resultado = document.getElementById("resultado");


botoes.forEach(botao => {
    botao.addEventListener("click", function adicionar() {
        let valor = this.innerText;
        // alert(`Valor selecionado: ${valor}`);
        resultado.value = resultado.value + valor;
    })
})

function limpar() {
    resultado.value = '';
}

limparClick.addEventListener("click", function(){
    limpar();
})

resultado.addEventListener("keydown", function(event) {
    if (event.key === "c") {
        limpar();
        event.preventDefault();
    }
})

apagar.addEventListener("click", function apagar() {
    // resultado.value = resultado.value.substring(0, resultado.value.length - 1);
    resultado.value = resultado.value.slice(0, -1);
})

function calcular() {
    if(resultado.value) {
        resultado.value = eval(resultado.value);
    }
}

calcularClick.addEventListener("click", function() {
    calcular();
})

resultado.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        calcular();
    }
})

