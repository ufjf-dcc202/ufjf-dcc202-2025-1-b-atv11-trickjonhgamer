//main.js
import { getLista, limpaLista, adicionaNaLista, removeDaLista } from './lista.js';
const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const btnRemover = document.querySelector("#remover");
atualizaLista();
btnLimpar.addEventListener('click', limparItensDeLista);
btnAdicionar.addEventListener('click', adicionarItemNaLista);
btnRemover.addEventListener('click', removeElementoDaLista);
function adicionarItemNaLista() {
    const item = pEntrada.textContent.trim();
    if (item) {
        adicionaNaLista(item);
        atualizaLista();
        pEntrada.textContent = "";
        pEntrada.focus();
    }
}

function atualizaLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
    const li = document.createElement('li');
    li.textContent = lista[i];
    olItens.appendChild(li);
  };
}
function limparItensDeLista() {
    limpaLista();
    atualizaLista();
}
function removeElementoDaLista() {
    const posicao = parseInt(pEntrada.textContent.trim());
    if (!isNaN(posicao)) {
        removeDaLista(posicao);
        atualizaLista();
        pEntrada.textContent = "";
        pEntrada.focus();
    } else {
        alert("Por favor, insira um número válido para remover.");
    }
}