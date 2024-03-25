import { useState, useEffect } from "react";


const Livros = () => {
    const [livros, setLivros] = useState([]);
    const [mensagem, setMensagem] = useState("");

    const pegaLivros = async () => {
        await fetch('http://localhost:3002/livros')
            .then(response => response.json())
            .then(json => setLivros(json))
            .catch(err => console.log(err));
    }

    const criarLivro = async () => {
        await fetch('http://localhost:3002/livros',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome: "Teste de Mesa 1", editora: "Nunes", ano: 2010 })
            })
            .then(response => response.json())
            .then(json => setMensagem(json.mensagem));
        pegaLivros();   // consulta novamente para recarregar os livros que têm na API
    }

    const removerLivro = async index => {
        if (window.confirm('Deseja remover o livro?')) {
            await fetch(`http://localhost:3002/livros/${index}`,
                { method: "DELETE" })
                .then(response => response.json())
                .then(json => setMensagem(json.mensagem));
        }
        pegaLivros();   // consulta novamente para recarregar os livros que têm na API
    }

    useEffect(() => {
        pegaLivros();
    }, []);

    return (
        <>
            <div className="container">
                <h2>Livros: {mensagem}</h2>
            </div>
            <div className="container">
                <table border="1" className="tabela">
                    <tr>
                        <th>Nome</th>
                        <th>Editora</th>
                        <th>Ano</th>
                        <th>Remover</th>
                    </tr>
                    {
                        livros.map((livro, index) => (
                            <tr key={index}>
                                <td>{livro.nome}</td>
                                <td>{livro.editora}</td>
                                <td>{livro.ano}</td>
                                <td><button onClick={() => removerLivro(index)}>Remover</button></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            <div className="botao">
                <button onClick={() => criarLivro()}>Criar Livro</button>
            </div>
        </>
    )
}

export default Livros;