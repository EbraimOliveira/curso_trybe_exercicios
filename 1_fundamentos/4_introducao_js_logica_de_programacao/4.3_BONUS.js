// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.

// let soma = 0;

// for (let i = 35; i <= 105; i += 1) {
//   soma += i;
// }
// console.log(soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.

// let quantidadeDeNumeros = 0;

// for (let i = 15; i <= 155; i += 1) {
//   if (i % 3 === 0) {
//     quantidadeDeNumeros += 1;
//   }
// }
// if (quantidadeDeNumeros >= 50) {
//   console.log("ja é");
// }
// console.log(quantidadeDeNumeros);

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

// let resultadoUm= "pedra";
// let resultadoDois= "papel";
// let resultadoTres= "tesoura";

// let jogadorUm = "pedra";
// let jogadorDois = "tesoura";

// if (
//   (jogadorUm === "pedra" && jogadorDois === "tesoura") ||
//   (jogadorUm === "tesoura" && jogadorDois === "papel") ||
//   (jogadorUm === "papel" && jogadorDois === "pedra")
// ) {
//   console.log("jogador 1 ganha");
// } else if (jogadorDois === jogadorUm) {
//   console.log("empate");
// } else {
//   console.log("jogador 2 ganha");
// }

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.

// let age = 5;
// let eighteenPlus = console.log(age > 18 ? "Overage" : "Underage");

// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

// function age(AdemarAge, AdriAge, JulianaAge) {
//   if (Math.min(AdemarAge, AdriAge, JulianaAge) === AdemarAge) {
//     console.log("A pessoa mais nova é Ademar");
//   } else if (Math.min(AdemarAge, AdriAge, JulianaAge) === JulianaAge) {
//     console.log("A pessoa mais nova é Juliana");
//   } else if (Math.min(AdemarAge, AdriAge, JulianaAge) === AdriAge) {
//     console.log("A pessoa mais nova é Adri");
//   } else {
//     console.log("Não há uma pessoa mais nova");
//   }
// }
// age();
