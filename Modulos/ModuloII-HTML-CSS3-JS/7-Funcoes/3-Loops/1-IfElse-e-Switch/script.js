// If/Else
function numeroPositivo(num){
    let resultado;

    if(num < 0){
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

console.log(numeroPositivo(2)); // true
console.log(numeroPositivo(-9)); // false


////////////////////////////////////////////////////////////////////////

//Switch/Case, serve quando há muitas verificações no qual 'If' ficaria muito grande

function getAnimal(id){
    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1); //cão
getAnimal(4); //peixe
getAnimal("1"); //peixe





