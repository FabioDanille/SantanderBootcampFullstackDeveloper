const lista = [
    {
        name: 'Sabão em pó',
        preco: 30
    },
    {
        name: 'Cereal',
        preco: 12
    },
    {
        name: 'Toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log("rodada ", index + 1); // só pra mostrar como funciona a relação do prev e current
        console.log({prev}); // para fins didáticos
        console.log({current}); // para fins didáticos
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));