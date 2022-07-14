function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

function mostraCidade(pessoa){
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
}

function mostraHobby(pessoa) {
    return `return idade de ${pessoa.nome} é ${pessoa.hobby}`
}

export{
    mostraIdade,
    mostraCidade,
}

    export default mostraHobby; 
    // Só pode haver um por arquivo;
    // Será o retorno padrão do seu arquivo.