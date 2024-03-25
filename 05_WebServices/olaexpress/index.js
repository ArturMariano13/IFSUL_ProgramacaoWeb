const express = require('express');
const cors = require('cors');

// criando uma instancia de uma aplicação express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

const ola = (request, response) => {
	return response.status(200).json({mensagem : "Seja bem vindo ao express"});
}

const sobre = (request, response) => {
    response.status(200).json({mensagem:"API desenvolvida em PW - Nodemon funcionando"});
}

const pegaDados = (request, response) => {
    const {nome, profissao} = request.body;
    response.status(200).json({nomeRecebido : nome, profissaoRecebida : profissao,
    mensagem : "Dados recebidos com sucesso!"});
}

app.route("/")
    .get(ola)
    .post(pegaDados);

app.route("/sobre")
    .get(sobre);

let listaLivros = [{nome : "Serviços com Express", editora : "Moderna", ano : 2024},
                    {nome : "Bíblia Sagrada", editora : "Jesus", ano : 0},
                    {nome : "Matemática Discreta", editora : "Moderna", ano : 2007}];

const getLivros = (request, response) => {
    response.status(200).json(listaLivros);
} 

const addLivros = (request, response) => {
    const {nome, editora, ano} = request.body;
    listaLivros.push({nome : nome, editora : editora, ano : ano});
    response.status(200).json({mensagem : "Livro adicionado com sucesso"});
}

const getLivroPorIndice = (request, response) => {
    const index = parseInt(request.params.index);
    response.status(200).json(listaLivros[index]);
}

const apagaLivroPorIndice = (request, response) => {
    const index = parseInt(request.params.index);
    const livro = listaLivros[index];

    if (livro != null) {
        listaLivros.splice(index, (index+1));
        response.status(200).json({mensagem : "Livro removido com sucesso!"});
    } else {
        response.status(500).json({mensagem : "Livro não encontrado!"});
    }
}

app.route("/livros")
    .get(getLivros)
    .post(addLivros);

app.route("/livros/:index")
    .get(getLivroPorIndice)
    .delete(apagaLivroPorIndice);

app.listen(3002, () => {
    console.log("Servidor rodando na porta 3002");
})