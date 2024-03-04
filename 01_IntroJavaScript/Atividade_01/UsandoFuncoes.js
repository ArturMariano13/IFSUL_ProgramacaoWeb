const funcoes = require('./Funcoes');
const arquivo = "dados.txt";
const objetoJSON = {"nome" : "A Biblioteca da Meia-Noite", "ano" : 2022};
const atributo = "CSS3";

funcoes.leitura(arquivo);
funcoes.adicionar(objetoJSON, arquivo);
funcoes.buscar(atributo, arquivo);
funcoes.remover(atributo, arquivo);