// Crie um algoritmo em Node JS que solicite ao usuário uma temperatura em graus
//Celsius e converta-a para graus Fahrenheit.
//Use a seguinte equação:
//Fahrenheit = (Celsius * 9/5) + 32

const prompt = require("prompt-sync") ();

let temp = (Number(prompt("Digite uma tempreratura em graus: ")))

cal = (temp * 9/5) + 32

console.log("Sua temperatura em Fahremheit é de: " + (cal).toFixed(2))