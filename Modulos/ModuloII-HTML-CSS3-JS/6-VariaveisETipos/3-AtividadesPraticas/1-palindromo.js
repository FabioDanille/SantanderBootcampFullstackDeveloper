// Caso 1
function verificaPalindromo(string){
    if(!string) return "String ausente"; // maneira de ver se a variável é nula, vazia ou undefined

    return string.split("").reverse().join("") === string 
    //.join junta todas as strings que foram soltas pelo split
}

let nulo = null
console.log(verificaPalindromo(nulo));

// console.log(verificaPalindromo('socorram-me, subi no onibus em marrocos'));
console.log(verificaPalindromo('fabio'));
console.log(verificaPalindromo('ana'));


// Caso 2
/*
Exemplos
omo
123
abbbba
012345
*/
function verificaPalindromo2(string){
    if(!string) return "String ausente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log("");
console.log(verificaPalindromo("gato"));
console.log(verificaPalindromo("ovo"));
