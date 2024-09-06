function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campoPesquisa for uma string vazia: o trim() remove todos os espaços em branco do início e do final da string. A negação (!) verifica se a string após o trim() está vazia
    if (!campoPesquisa.trim()) {
        section.innerHTML = "Poxa, nenhum personagem foi encontrado ):";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Para cada dado na lista de dados:
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o campo de pesquisa está contido no título, descrição ou tags do dado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado"> 
                <div class="imagem-container">
                    <img src="${dado.imagem}" alt="Imagem de ${dado.titulo}" class="imagem-redonda">
                </div>
                <div class="titulo-texto">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                </div>
            </div>
            `;
        }
    }

    // Verifica se há resultados após o loop
    if (!resultados) {
        section.innerHTML = "Você precisa digitar o nome de um dos 6 personagens!";
    } else {
        section.innerHTML = resultados;
    }
}
