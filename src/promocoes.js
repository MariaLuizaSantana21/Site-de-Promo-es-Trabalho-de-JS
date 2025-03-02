import { produtos } from './produtos';
let list = document.querySelector(".list"); // Seleciona a lista usando querySelector

function initApp() {
    produtos.forEach((value, index) => {
        let newLi = document.createElement('div'); // Cria elementos <li>
        newLi.classList.add('item');
        newLi.innerHTML =  `
            <img src="./src/img/${value.imagem}" />
            <div class="title">${value.title}</div>
            <div class="atualprice">${value.atualprice.toLocaleString()}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            `;
        list.appendChild(newLi); // Adiciona os <li> à lista
    });
}

initApp();  


const pesquisaInput = document.getElementById('pesquisa');

function exibirProdutos(produtosParaExibir) {
    list.innerHTML = ''; // Limpa a lista *corretamente*

    produtosParaExibir.forEach(produto => { // Use forEach para iterar e adicionar os elementos
        
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML =  `
            <img src="./src/img/${produto.imagem}" />
            <div class="title">${produto.title}</div>
            <div class="atualprice">${produto.atualprice.toLocaleString()}</div>
            <div class="price">${produto.price.toLocaleString()}</div>
            `;

        list.appendChild(item); // Adiciona os <li> à lista
    });
}

function filtrarProdutos() {
    const termoPesquisa = pesquisaInput.value.toLowerCase();

    const produtosFiltrados = produtos.filter(produto => {
        return produto.title.toLowerCase().includes(termoPesquisa) || produto.atualprice.toLowerCase().includes(termoPesquisa); // converte o preço para lowerCase tambem
    });

    exibirProdutos(produtosFiltrados);
}

exibirProdutos(produtos); // Exibe todos os produtos inicialmente

pesquisaInput.addEventListener('input', filtrarProdutos);

