let array = [];

array.push(3); // ADICIONA no final
console.log(array);

array.push(2); // ADICIONA no final
console.log(array);

array.pop(); // retira o elemento final do array, no caso será o 2
console.log(array);

array.push(2,5);
console.log(array);

array.shift() // retira o PRIMEIRO elemento
console.log(array);

array.unshift(50) // ADICIONA o PRIMEIRO elemento
console.log(array);

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

array.reverse() // inverte os argumentos
console.log(array);