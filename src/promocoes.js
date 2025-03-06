import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://awtnbwcotxogdxpkgode.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3dG5id2NvdHhvZ2R4cGtnb2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3Mjc1OTEsImV4cCI6MjA1NTMwMzU5MX0.v_b8AYz8vyQOjHRpTFJ1LmysAALLMv4rE6r3PuR2lNw';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const list = document.querySelector(".list");
const pesquisaInput = document.getElementById('pesquisa');

function renderItem(produto) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
        <img src="${produto.imagem}" />
        <div class="title">${produto.title}</div>
        <div class="atualprice">${produto.atualprice.toLocaleString()}</div>
        <div class="price">${produto.price.toLocaleString()}</div>
    `;
    return item;
}

function exibirProdutos(produtosParaExibir) {
    list.innerHTML = '';
    produtosParaExibir.forEach(produto => {
        list.appendChild(renderItem(produto));
    });
}

async function initApp() {
    const { data: produtos, error } = await supabase
        .from('produtos')
        .select('*');

    if (error) {
        console.error('Erro ao buscar produtos:', error);
        return;
    }

    exibirProdutos(produtos);
}

async function filtrarProdutos() {
    const termoPesquisa = pesquisaInput.value; // Obtém o valor do input

    const regex = new RegExp(termoPesquisa, 'i'); // Cria a regex

    const { data: produtosFiltrados, error } = await supabase
        .from('produtos')
        .select('*')
        .or(`title.ilike.%${termoPesquisa}%,atualprice.ilike.%${termoPesquisa}%`);

    if (error) {
        console.error('Erro ao filtrar produtos:', error);
        return;
    }

    exibirProdutos(produtosFiltrados);
}

initApp(); // Inicializa a aplicação

pesquisaInput.addEventListener('input', filtrarProdutos);