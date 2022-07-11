function substituiPares(array){
    if(!array) return -1; // assim roda undefined, null e false... pois não existe
    if(!array.length) return -1; // caso seja 0

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!");
        } else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));

console.log(substituiPares(false));     // -1
console.log(substituiPares([]));        // -1
console.log(substituiPares([0, 1, 2]));
console.log(substituiPares(null));      // -1
console.log(substituiPares(undefined)); // -1


