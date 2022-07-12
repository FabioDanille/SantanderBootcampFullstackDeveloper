// FOR...in
// Loop entre propriedades enumeráveis de um objeto

function forInExemplo(obj){
    for(prop in obj){
        console.log(prop); // Busca CHAVES
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto); 
// nome
// idade
// cidade