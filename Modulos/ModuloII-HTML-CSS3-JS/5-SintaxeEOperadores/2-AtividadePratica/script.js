
function soma(a,b){
    let somaAB = a + b;
    if(a === b){
        console.log("Os números são iguais");
    }else{
        console.log("Os números são diferentes!");
    }       

    if(a + b > 10 && a + b < 20){
        console.log(`A soma de ${a} com ${b} é igual a ${somaAB}, o que é maior que 10 e menor que 20`);
    }
}

soma(1,18);