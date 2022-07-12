const callbackFn = function(accumulator, currentValue, index, array){
    // do something
}

array.reduce(callbackFn, initialValue);

/*
Accumulator/prevValue: acumulador de todas as chamadas de callbackFn

currentValue: elemento atual sendo acessado pela função

*/