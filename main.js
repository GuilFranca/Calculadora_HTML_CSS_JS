// Associando as variáveis const aos botões, já que os mesmos não teram o valor mudado
const botoes = document.querySelectorAll(".botao"); //querySekectorAll pega o valor de todos os elementos da página com a classe, tag ou id inseridos.
const limparClick = document.querySelector(".limpar");
const apagar = document.querySelector(".apagar");
const calcularClick = document.querySelector(".calcular");

// Associando o input à uma variável let, já que o mesmo vai mudar constantemente
let resultado = document.getElementById("resultado");

// botoes é uma coleção de elementos DOM - que contem todos os elementos da classe botao da página
botoes.forEach(botao => { // Está informando que todo elemento com a class botao vai receber uma função ativada por um click
    botao.addEventListener("click", function adicionar() { //Está função serve para adicionar caracteres ao input
        let valor = this.innerText;
        // alert(`Valor selecionado: ${valor}`);
        resultado.value = resultado.value + valor;
    })
})

// Criação da função limpar utilizada para apagar todos os caracteres do input
function limpar() {
    resultado.value = '';
}

// Está função é ativada por um click 
limparClick.addEventListener("click", function(){
    limpar();
})

// Está função é ativada por uma tecla quando o input é selecionado
resultado.addEventListener("keydown", function(event) { // Delimita que a função será ativada com o aperto de uma tecla que será o event da função
    if (event.key === "c") { // caso a tecla pressionada seja "c" o programa chmará a função limpar(), vista anteriormente;
        limpar();
        event.preventDefault(); //Está linha de código faz com que o input volte para o padrão vázio ao invés de colocar o caractere "c" no lugar dos outros
    }
})

apagar.addEventListener("click", function apagar() {
    // resultado.value = resultado.value.substring(0, resultado.value.length - 1);
    // Está função apaga o último elemento da string
    resultado.value = resultado.value.slice(0, -1);
})

function calcular() {
    if(resultado.value) {
        // eval é uma função que interpreta os calculos em formato de string
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

