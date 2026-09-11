
const prompt = require("prompt-sync") ();

/*
Crie um algoritmo em Node JS que solicite ao usuário um valor a ser investido,
a taxa de juros anual e o número de anos que o investimento irá durar. Em
seguida, exiba na tela o valor inicial investido e o montante final do investimento.

Use a seguinte equação:
Montante = Valor Inicial * (1 + Taxa de Juros / 100) ** Número de Anos.
*/


let v1 = Number(prompt("Qual valor deseja investir? "))
let taxa = Number(prompt("Qual a porcentagem da taxa? (ex:100% anual) "))
let aa = Number(prompt("Por quantos anos vc vai investir? "))

op = v1 * (1 + taxa / 100) ** aa

console.log("Seu dinheiro rendera aproximadamente:" + taxa + "\nIsso dara: " + op + " R$!")

