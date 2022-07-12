/*
Fetch
Consumindo API's
*/

fetch(url, options)
    .then(response => response.json()) // conversão em json para usar em JS
    .then(json => console.log(json))

    // retorna uma Promise!!!! Ou seja, precisa usar await



/*
Fetch
Operações no banco (POST, GET, PUT, DELETE, etc)    
*/
// Ex1
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))
    // fetch retorna uma Promise!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// Ex2
    fetch('https://endereco-api.com/', {
        method: 'POST', // POST = manda dados para serem gravados no banco de dados
        cache: 'no-cache',
        body: JSON.stringify(data) // pra isso, requer a conversão do JSON para STRING
    })
        .then(response => response.json())
        .then(json => console.log(json))
    // fetch retorna uma Promise!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!