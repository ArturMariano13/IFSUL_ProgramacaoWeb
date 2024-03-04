const fs = require('fs');

// 1. a)
const leitura = (nomeArquivo) => {
    let dadosJSON = JSON.parse(fs.readFileSync(nomeArquivo).toString('utf8'));
    console.log("Dados da leitura:\n", dadosJSON);
};

// 1. b) 
const adicionar = (livros, nomeArquivo) => {
    let dadosAntigos = JSON.parse(fs.readFileSync(nomeArquivo).toString('utf8'));
    dadosAntigos.push(livros);
    fs.writeFileSync(nomeArquivo, JSON.stringify(dadosAntigos));
    dadosAntigos = JSON.parse(fs.readFileSync(nomeArquivo).toString('utf8'));
    console.log("Dados Atualizados:\n", dadosAntigos);
}

// 1. c)
const buscar = (atributo, nomeArquivo) => {
    let livros = JSON.parse(fs.readFileSync(nomeArquivo).toString('utf8'));
    let objeto = livros.find((livro) => livro.nome == atributo);
    console.log("Dados do livro ", atributo, ": ", objeto);
}

// 1. d)
const remover = (atributo, nomeArquivo) => {
    let livros = JSON.parse(fs.readFileSync(nomeArquivo).toString('utf8'));
    let index = livros.findIndex((livro) => livro.nome === atributo);

    if (index !== -1) {
        livros.splice(index, 1);

        fs.writeFileSync(nomeArquivo, JSON.stringify(livros));
        console.log("Livro removido com sucesso!");
    }else{
        console.log("Livro não encontrado!");
    }

}

module.exports = { leitura , adicionar , buscar , remover };

