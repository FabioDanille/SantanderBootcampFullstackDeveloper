// Funções ASSÍNCRONAS precisam dessas duas palavras chave (ASYNC/AWAIT)


async function resolvePromise(){
const myPromise = new Promise ((resolve, reject) => {
    window.setTimeout(() => {
        resolve('Resolvida!');
    }, 3000);
});

// Incrementando...

const resolved = await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

    return resolved;
}

// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"
