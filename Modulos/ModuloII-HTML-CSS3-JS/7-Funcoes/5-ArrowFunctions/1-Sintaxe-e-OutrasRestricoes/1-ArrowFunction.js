//Exemplos de Arrow Function
//1º
const helloWord = () => "Hello World"; // Nesse caso entende-se por return "Hello World"

//2º
const soma = (a, b) => a + b;
soma(4, 6);

//3º
const soma2 = a => a; // 1 parâmetro não exige ()
soma2(4);

//Obs: ArrowFunction não faz hoisting, diferente de funções normais