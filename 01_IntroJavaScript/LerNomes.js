const fs = require('fs');

console.log(1);

// função de callback
const callback = (erro, contents) => {
    console.log(erro, String(contents));
}

fs.readFile('./nomes.txt', callback);

console.log(2);

// uso de Promise

const readFile = file => new Promise( (resolve, reject) => {
    fs.readFile(file, (erro, contents) => {
        if (erro){
            reject(erro);
        }else{
            resolve(contents);
        }
    });
});

readFile('./nomes.txt')
    .then(contents => console.log(String(contents)))
    .catch(err => console.log(erro))

console.log(3);

// async e await

const leitura = async () => {
    const contents = await readFile('./nomes.txt');
    console.log(String(contents));
}

console.log(4);

console.log(5);

// CALLBACK => chamada após a execução de outra função
// JavaScript é uma linguagem ASSÍNCRONA
