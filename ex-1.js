//Crie um algoritmo em Python que solicite ao usuário a base e a altura de um
// triângulo retângulo. Em seguida, calcule e exiba a sua área.
//Use a seguinte equação:
// Área do Triângulo = (Base × Altura) / 2

const prompt = require("prompt-sync") ();



let base = Number(prompt("Digite o valor da base: "))
let altura =  Number(prompt("Digite o valor da altura: "))

op = (base * altura) / 2

console.log("A sua area é de: " + op + "cm")
