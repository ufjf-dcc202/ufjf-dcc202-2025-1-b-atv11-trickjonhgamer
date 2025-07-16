import { expect, test } from 'vitest';
import { getLista, adicionaNaLista, removeDaLista, limpaLista } from '../lista.js';

test('Deve ter uma função getLista() exportada no módulo', () => {
  expect(getLista).toBeTypeOf('function');
});

test('Deve ter uma função adicionaNaLista() exportada no módulo', () => {
  expect(adicionaNaLista).toBeTypeOf('function');
});

test('Deve ter uma função removeDaLista() exportada no módulo', () => {
  expect(removeDaLista).toBeTypeOf('function');
});

test('Deve ter uma função limpaLista() exportada no módulo', () => {
  expect(limpaLista).toBeTypeOf('function');
});

test('A lista deve ter três itens iniciais', () => {
  const lista = getLista();
  expect(lista.length).toBe(3);
  expect(lista[0]).toBe("Um");
  expect(lista[1]).toBe("Dois");
  expect(lista[2]).toBe("Três");
});

test('A lista deve estar vazia depois de chamar limpaLista()', () => {
  let lista = getLista();
  expect(lista.length).toBe(3);
  limpaLista();
  lista = getLista();
  expect(lista.length).toBe(0);
});

test('adicionaNaLista() inserir elementos ao final da lista', () => {
  limpaLista();
  adicionaNaLista("Primeiro");
  adicionaNaLista("Segundo");
  adicionaNaLista("Terceiro");
  let lista = getLista();
  expect(lista.length).toBe(3);
  expect(lista[0]).toBe("Primeiro");
  expect(lista[1]).toBe("Segundo");
  expect(lista[2]).toBe("Terceiro");
});

test('removeDaLista() deve remover o item dado pela posição', () => {
  limpaLista();
  adicionaNaLista("Primeiro");
  adicionaNaLista("Segundo");
  adicionaNaLista("Terceiro");
  removeDaLista(1)
  let lista = getLista();
  expect(lista.length).toBe(2);
  expect(lista[0]).toBe("Primeiro");
  expect(lista[1]).toBe("Terceiro");
});
