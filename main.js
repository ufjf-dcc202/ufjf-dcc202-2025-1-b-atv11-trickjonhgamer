//main.js
import { getLista, limpaLista, adicionaNaLista } from './lista.js';
const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
atualizaLista();
btnLimpar.addEventListener('click', limparItensDeLista);
btnAdicionar.addEventListener('click', adicionarItemNaLista);
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