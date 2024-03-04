const livros1 = ['Bíblia', 'Kama Sutra'];
const livros2 = ['Minecraft', 'Biografia Felipe Neto', 'Memórias Póstumas de Brás Cubas']

let livros = [...livros1, ...livros2];

console.log(livros1);
console.log(livros2);
console.log(livros);

const precos = [1, 2, 3, 4, 5];

let precoMaximo = Math.max(...precos);

console.log (precoMaximo);

let objeto = {id : 1, nome : "Jorge", funcao : "Amado"};

//objeto.nome = "João";

console.log(objeto);

let objetoAlterado = {...objeto, 'nome' : "Paulo", 'funcao' : 'Decorações'};

console.log(objetoAlterado);