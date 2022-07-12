/*
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
*/

function getAdmins(map){
    let admin = [];
    for([key, value] of map){ // onde a magia acontece
        if(value === 'Administrador'){
            admin.push(key);
        }
    }
    return admin;
}

const myMap = new Map();

myMap.set('Fabio', 'Administrador');
myMap.set('Francyele', 'Fonoaudióloga');
myMap.set('Evandro', 'Administrador');
myMap.set('Marcia', 'Advogada');

console.log(getAdmins(myMap));