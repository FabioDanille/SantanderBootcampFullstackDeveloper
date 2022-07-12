const myPromise = new Promise ((resolve, reject) => {
    window.setTimeout(() => {
        resolve('Resolvida!');
    }, 2000);
});

// Incrementando...

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"
