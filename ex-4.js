const prompt = require("prompt-sync") ();

/*
Crie um algoritmo em Node JS que solicite ao usuário quatro notas. Calcule a
média aritmética entre elas e, em seguida, exiba o resultado na tela e a sua
menção final.

Use a seguinte equação:
Média = (N1 + N2 + N3 + N4) / 4

Use a seguinte lógica:
Média < 2 → Reprovado.
Média >= 2 e Média < 6 → Exame.
Média >= 6 → Aprovado.
*/

n1 = Number(prompt("Digite a primeira nota: "))
n2 = Number(prompt("Digite a segunda nota: "))
n3 = Number(prompt("Digite a terceira nota: "))
n4 = Number(prompt("Digite a quarta nota: "))

op = (n1 + n2 + n3 + n4) / 4

if (op < 2) {
    console.log("Média reprovada \n Nota: " + op)
}
if (op >= 2 && op < 6) {
    console.log("Conselho de classe (Exame) \n Nota: " + op)
}
if (op >= 6) {
    console.log("Média Aprovada \n Nota: " + op)
}
