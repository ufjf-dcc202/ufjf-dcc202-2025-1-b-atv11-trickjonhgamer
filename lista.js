//lista.js
const lista = ["Um", "Dois", "Três"];
export function getLista() {
  return structuredClone(lista);
}
export function limpaLista() {
  lista.splice(0);
}
export function adicionaNaLista(item) {
    if (item) {
        lista.push(item);
    }
    }