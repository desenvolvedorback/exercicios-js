/*
Crie um algoritmo em Node JS que processe os cadastros de usuários de um
sistema de gerenciamento de clientes. O algoritmo deve solicitar a quantidade
de usuários e a idade de cada um. Ao final, exiba quantos usuários são maiores
de idade e quantos são menores de idade.

Use um laço de repetição FOR para percorrer os usuários e a estrutura IF e
ELSE para classificar cada um.
*/

const prompt = require("prompt-sync") ();
const quantidadeUsuarios = parseInt(prompt("Quantos usuários deseja cadastrar? "));
let maioresIdade = 0;
let menoresIdade = 0;

for (let i = 0; i < quantidadeUsuarios; i++) {
  const idade = parseInt(prompt(`Digite a idade do usuário ${i + 1}? `));
  if (idade >= 18) {
    maioresIdade++;
  } else {
    menoresIdade++;
  }
}

console.log(`Quantidade de usuários totais: ${quantidadeUsuarios}`);
console.log(`Quantidade de usuários maiores de idade: ${maioresIdade}`);
console.log(`Quantidade de usuários menores de idade: ${menoresIdade}`);