// ARRAYS

// Spread: forma de lidar separadamente com elementos
function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // técnica spread "'...'numbers"



// Rest: combina os argumentos em um array
function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 4, 5); // 3

//////////////////////////////////////////////////////////////////////////////////////// 
console.log("");
// OBJETOS

// Object Destructuring

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){ // Entre CHAVES faz assim
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`
}

console.log(userId(user));
//42

console.log(getFullName(user));
//John Doe

