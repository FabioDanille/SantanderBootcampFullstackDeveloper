function verificaPalindromo(string){
    if(!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e); // também daria 'throw (e);'
    } finally{
        console.log('Aqui vai rodar independentemente do que aconteça');
    }

    return 'Passou aqui';
}
console.log(verificaPalindromo('ovo'));
console.log(tryCatchExemplo('ovo')); // linha 14 e 17
