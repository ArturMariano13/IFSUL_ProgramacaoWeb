const livros = [{nome : "Bíblia", ano : 2042}, {nome : "Alcorão", ano : 1982}, {nome : "Torá", ano : 1865}];

livros.map( (livro) => {
    console.log("Nome: " + livro.nome + " | Ano: " + livro.ano);
})

livros.map ((livro, index) => {
    console.log("Índice: ", + index + " | Livro: " + JSON.stringify(livro));
})

let livrosFiltrados = livros.filter((livro) => livro.ano > 2018);

console.log(JSON.stringify(livrosFiltrados));

let objeto = livros.find((livro) => livro.nome == "Alcorão");

console.log(objeto);