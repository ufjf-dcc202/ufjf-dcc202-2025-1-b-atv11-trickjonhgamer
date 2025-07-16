// @ts-check
import { test, expect } from "@playwright/test";

test.describe("index.html", () => {
  test("deve ter o charset em UTF-8 no meta dentro do head", async ({
    page,
  }) => {
    await page.goto(`http://localhost:5500`);
    await expect(page.locator("meta[charset]")).toHaveAttribute(
      "charset",
      "UTF-8"
    );
  });

  test('deve ter um meta viewport com atributo content com "width=device-width, initial-scale=1.0" no head', async ({
    page,
  }) => {
    await page.goto(`http://localhost:5500`);
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
      "content",
      "width=device-width, initial-scale=1.0"
    );
  });

  test("deve ter o lang em pt no html", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    await expect(page.locator("html")).toHaveAttribute("lang", "pt");
  });

  test("deve ter um título no head com o número da atividade e nome do aluno", async ({
    page,
  }) => {
    await page.goto(`http://localhost:5500`);
    await expect(page).toHaveTitle(/DCC202 - Atividade 11: (.*)/);
  });

  test("deve ter um main com algum conteúdo", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    await expect(page.locator("main")).toBeVisible();
  });

  test("deve ter um título no main com o nome do aluno", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    await expect(page.locator("main > h1")).toHaveText(
      /DCC202 - Atividade 11: (.*)/
    );
  });

  test("o main deve ter um parágrafo logo após o título", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    const p = page.locator("main > h1+p");
    await expect(p).toBeVisible();
    await expect(p).toHaveText(
      "Esta é a página principal tem código JavaScript nela. Você deve iteragir com os elementos e ver o resultado na página."
    );
  });

  test("Deve ter um script módulo na cabeça do documento para main.js.", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    const script = page.locator("head > script");
    await expect(script).toHaveAttribute('src', 'main.js');
    await expect(script).toHaveAttribute('type', 'module');
  });

  test("deve ter um parágrafo sem uma seção com id entrada e conteúdo editável", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    const p = await page.locator("main > section> p");

    await expect(p).toBeEditable();
    await expect(p).toHaveText(
      /Item/
    );
    await expect(p).toHaveId('entrada');
    await expect(p).toHaveAttribute('contenteditable', '');
  });

  test("deve ter dois botões com ids e conteúdos definidos", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    const b1 = await page.locator("main > section> #adicionar");
    await expect(b1).toHaveText(
      /Adicionar/
    );
    await expect(b1).toHaveId('adicionar');

    const b2 = await page.locator("main > section> #limpar");
    await expect(b2).toHaveText(
      /Limpar Lista/
    );
    await expect(b2).toHaveId('limpar');
  });

  test("deve ter uma lista ordenada com id 'itens'", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    const ol = await page.locator("main > section> ol");
    await expect(ol).toHaveId('itens');
  });

  test("a lista deve ter três itens inicialmente", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    const itensDaLista = await page.locator("#itens > li");
    await expect(itensDaLista).toHaveCount(3);
  });

  test("Um novo item deve ser adicionado à lista ao digitar e clicar em adicionar", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    const p = await page.locator("main > section> p");
    const b1 = await page.locator("main > section> #adicionar");
    await p.selectText();
    await page.fill("main > section> p", "Test Item");
    expect(p).toHaveText("Test Item")
    await page.click("main > section> #adicionar");
    expect(p).toHaveText("")
    const itensDaLista = await page.locator("#itens > li");
    await expect(itensDaLista).toHaveCount(4);
    await expect(page.locator("#itens > li:nth-child(4)")).toHaveText('Test Item');
  });

  test("A lista deve ficar vazia ao clicar em 'Limpar Lista'", async ({ page }) => {
    await page.goto(`http://localhost:5500`);
    const p = await page.locator("main > section> p");
    const b1 = await page.locator("main > section> #limpar");
    const itensDaLista = await page.locator("#itens > li");
    await expect(itensDaLista).toHaveCount(3);
    await page.click("main > section> #limpar");
    await expect(itensDaLista).toHaveCount(0);
  });
});
