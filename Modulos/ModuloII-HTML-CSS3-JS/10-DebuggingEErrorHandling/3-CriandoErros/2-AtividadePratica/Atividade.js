/*
Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda 
ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

let array = [1, 3, 5, 7];

function validacaoTryCatch(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        else if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        
        else if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

        else if(arr.length !== num) throw new RangeError("Tamanho diferentes");

        return arr; // caso o array seja válido, retorna o array
    } catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError")
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Este erro é um TypeError")
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("Este erro é um RangeError")
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

// console.log(validacaoTryCatch()); /* Teste 1 */
// console.log(validacaoTryCatch(5, 5)); /* Teste 2 */
console.log(validacaoTryCatch([], 'a')); /* Teste 3 */
// console.log(validacaoTryCatch([], 5)); /* Teste 4 */
// console.log(validacaoTryCatch([1, 2, 3, 4, 5], 5)); /* Teste 5 */
// console.log(validacaoTryCatch()); /* Teste 6 */
// console.log(validacaoTryCatch()); /* Teste 7 */

