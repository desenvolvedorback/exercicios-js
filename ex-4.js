/*
Crie um algoritmo em Node JS que aplique um desconto sobre os produtos de
um pedido. O algoritmo deve receber o preço de cada produto até que seja
digitado o valor 0. Produtos com preço acima de R$ 100,00 recebem 10% de
desconto; os demais mantêm o preço original. Ao final, exiba o valor total do
pedido já com os descontos aplicados.

Use um laço de repetição WHILE para receber os produtos e a estrutura IF e
ELSE para aplicar o desconto:

Preço acima de R$ 100,00 → desconto de 10%
Preço até R$ 100,00 → sem desconto

Preço Final = Preço × (1 − Desconto)
*/

const prompt = require("prompt-sync") ();
let valorProduto;
let totalPedido = 0;
let descontoAplicado = false;

while (true) {
  valorProduto = parseFloat(prompt("Digite o preço do produto (ou 0 para encerrar): "));
  if (valorProduto === 0) {
    break;
  }
  if (valorProduto > 100) {
    totalPedido += valorProduto * 0.9;
     descontoAplicado = true; // Aplica desconto de 10%
  } else {
    totalPedido += valorProduto;
  }
}

console.log(`Desconto aplicado: ${descontoAplicado ? "10%" : "0%"}`);
console.log(`O valor total do pedido é: R$ ${totalPedido.toFixed(2)}`);


// ? --> if (se)
// : ---> else(senão)