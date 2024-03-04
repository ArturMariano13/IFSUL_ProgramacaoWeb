const fs = require('fs');

let arquivo = "meusLivros.txt";

const livros = [{nome : "Bíblia", ano : 0}, {nome : "Alcorão", ano : 100}, {nome : "Torá", ano : 50}];

// gravar no disco
fs.writeFileSync(arquivo, JSON.stringify(livros));

// ler do disco
let dadosArquivo = fs.readFileSync(arquivo).toString('utf8');

console.log(dadosArquivo);

let dadosJSON = JSON.parse(dadosArquivo);

console.log(dadosJSON[0]);
console.log(dadosJSON);