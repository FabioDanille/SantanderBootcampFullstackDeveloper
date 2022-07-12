const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){ // item equivale ao 'arr' que equivale ao 'nums'
        return item * this.value; // this.value será o valor do segundo parâmetro
    }, thisArg);
}

const nums = [1, 2];


console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));
