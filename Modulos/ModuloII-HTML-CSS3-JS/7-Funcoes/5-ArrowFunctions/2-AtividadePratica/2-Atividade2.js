const pessoa = {
    nome: 'Fabio',
    idade: 29
}


function calculaIdade(anos) {
	return console.log(`Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos} anos de idade.`);
}

calculaIdade.call(pessoa, 30);
// ou
calculaIdade.apply(pessoa, [20]);

