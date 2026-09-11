/*
Crie um algoritmo em Node JS que registre as vendas de uma loja de doces até
o fechamento do caixa. O algoritmo deve receber o valor de cada venda até que
seja digitado o valor 0, indicando o fim do expediente. Ao final, exiba o
faturamento total do dia.

Use um laço de repetição WHILE para acumular as vendas.
*/
const prompt = require("prompt-sync") ();
let faturamentoTotal = 0;
let valorVenda;

while (true) {
  valorVenda = parseFloat(prompt("Digite o valor da venda (ou 0 para encerrar): "));
  if (valorVenda === 0) {
    break;
  }
  faturamentoTotal += valorVenda;
}

console.log(`O total de vendas do dia é de R$ ${valorVenda.toFixed(2)}`);
console.log(`O faturamento total do dia é: R$ ${faturamentoTotal.toFixed(2)}`);