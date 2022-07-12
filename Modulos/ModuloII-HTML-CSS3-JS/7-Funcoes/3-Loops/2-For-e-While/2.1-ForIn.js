// FOR...in
// Loop entre propriedades enumeráveis de um objeto

function forInExemplo(obj){
    for(prop in obj){
        console.log(obj[prop]); // Busca VALORES
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto); 
// João
// 20
// Salvador