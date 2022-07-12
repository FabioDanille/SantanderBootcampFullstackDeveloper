const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
};

soma.apply(myObj, [1, 5]); //12

// Basicamente a diferença é que deve estar em colchetes na hora de chamar os parâmetros