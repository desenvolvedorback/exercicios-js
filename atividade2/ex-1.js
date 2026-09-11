/*
Crie um algoritmo em Node JS que calcule o total de um carrinho de compras.
Para cada interação do laço de repetição, solicite a quantidade de produtos e o
preço de cada um. Ao final, exiba o valor total da compra.

Use um laço de repetição FOR para percorrer os produtos.
 */

const prompt = require("prompt-sync") ();

const totalProdutos = parseInt(prompt("Quantos produtos você deseja adicionar ao carrinho? "));
let totalCompra = 0;

for (let i = 0; i < totalProdutos; i++) {
  const quantidade = parseInt(prompt(`Quantidade do produto ${i + 1}? `));
  const preco = parseFloat(prompt(`Preço do produto ${i + 1}? `));
  totalCompra += quantidade * preco;
}

console.log(`O total de produtos é: ${totalProdutos}`);
console.log(`O valor total da compra é: R$ ${totalCompra.toFixed(2)}`);