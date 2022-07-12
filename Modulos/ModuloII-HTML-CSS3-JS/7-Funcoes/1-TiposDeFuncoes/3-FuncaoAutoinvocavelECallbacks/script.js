
// Função autoinvocável
// IIFE(Immediately Invoked Function Expression)

// Exemplo 1
(
    function(){
        let name = "Digital Innovation One"
        return name;
    }
)();
// Digital Innovation One

// Exemplo 2
(
    function(a, b){
        return a + b;
    }
)(1, 2);
//3

// Exemplo 3
const soma3 = (
    function() {
        return a + b;
    }
)(1, 2);
console.log(soma3); //3




// Callbacks
// São funções chamadas como parâmetros em outras funções
const calc = function(operacao, num1, num2){
    return operacao(num1, num2)
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // -1
console.log(resultSoma); // 3