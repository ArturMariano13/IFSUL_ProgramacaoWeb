const funcoes = require('./Funcoes');

funcoes.ola();
funcoes.saida('OI');

// DESESTRUTURAÇÃO => pega somente as funções que se deseja utilizar
const { ola , saida } = require('./Funcoes');

ola();

saida("Importei a função de forma desestruturada!");