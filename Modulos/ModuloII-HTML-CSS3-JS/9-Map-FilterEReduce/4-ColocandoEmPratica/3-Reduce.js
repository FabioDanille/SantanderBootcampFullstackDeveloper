function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev}); // para fins didáticos
        console.log({current}); // para fins didáticos
        return prev + current;
    }, 0) // 0 como valor inicial
}

const array = [1, 2];

console.log(somaNumeros(array));