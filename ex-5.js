const prompt = require("prompt-sync") ();

/*
Crie um algoritmo em Node JS que solicite ao usuário seu peso (em quilogramas)
e sua altura (em metros). Calcule e exiba o seu Índice de Massa Corporal (IMC)
e a sua classificação, de acordo com a tabela abaixo.

IMC Classificação
abaixo de 18,5 Abaixo do normal
de 18,5 a 24,9 Peso normal
de 25 a 29,9 Sobrepeso
de 30 a 34,9 Obesidade leve
de 35 a 39,9 Obesidade moderada

de 40 para cima Obesidade grave

Use a seguinte equação:
IMC = Peso / (Altura2)
*/


let peso = Number(prompt("Digite o seu peso em kg: "))
let altura = Number(prompt("Digite o sua altura em metros: "))

op = peso / (altura * altura)

if (op < 18.5) {
    console.log("IMC abaixo do normal \nIMC: " + (op).toFixed(2))
}
if (op >= 18.5 && op < 24.9) {
    console.log("IMC normal \nIMC: " + (op).toFixed(2))
}
if (op >= 25 && op < 29.9) {
    console.log("IMC Sobrepeso \nIMC: " + (op).toFixed(2))
}
if (op >= 30 && op < 34.9) {
    console.log("IMC Obesidade leve \nIMC: " + (op).toFixed(2))
}
if (op >= 35 && op < 39.9) {
    console.log("IMC Obesidade moderada \nIMC: " + (op).toFixed(2))
}
if (op > 40) {
    console.log("IMC Obesidade grave \nIMC: " + (op).toFixed(2))
}