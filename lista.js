//lista.js
const lista = ["Um", "Dois", "Três"];
export function getLista() {
  return structuredClone(lista);
}