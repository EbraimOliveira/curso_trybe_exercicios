// //1 -Operadores aritméticos.

// const a = 5;
// const b = 8;

// let soma = a + b;
// let subtração = a - b;
// let mutiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(soma, subtração, mutiplicacao, divisao, modulo);

// //2, 3 -Operadores de comparação.
// //Faça um programa que retorne o maior de três números.

// const a = 5;
// const b = 8;
// const c = 3;

// if (a > b && a > c) {
//   console.log(a);
// }
// if (c > b && c > a) {
//   console.log(c);
// }
// if (a < b && c < b) {
//   console.log(b);
// }

// //4 -Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negativo" se for negativo e "zero" caso contrário.

// const a = 0;

// if (a < 0) {
//   console.log("positivo");
// }
// if (a === 0) {
//   console.log("zero");
// } else {
//   console.log("negativo");
// }

// //🚀 5 -Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const anguloA = 30;
// const anguloB = 100;
// const anguloC = 50;

// if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
//   console.log("erro");
// } else if (anguloA + anguloB + anguloC === 180) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// //6 -Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// let pecaDeXadrez = "RAINHa";

// switch (pecaDeXadrez.toLowerCase()) {
//   case "peao":
//     console.log("uma em um casa, em linha reta");
//     break;
//   case "torre":
//     console.log("em linhas ou colunas");
//     break;
//   case "bispo":
//     console.log("em diagonal");
//     break;
//   case "cavalo":
//     console.log("em forma de L");
//     break;
//   case "rainha":
//     console.log("em qualquer direção, quantas casas quiser");
//     break;
//   case "rei":
//     console.log("em qualquer direção, de uma em uma");
//     break;
//   default:
//     console.log("erro");
// }

// //7 -Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

// const notaEmPorcentagem = 120;

// if (notaEmPorcentagem < 0 || notaEmPorcentagem > 100) {
//   console.log("erro");
// } else if (notaEmPorcentagem >= 90) {
//   console.log("A");
// } else if (notaEmPorcentagem >= 80) {
//   console.log("B");
// } else if (notaEmPorcentagem >= 70) {
//   console.log("C");
// } else if (notaEmPorcentagem >= 60) {
//   console.log("D");
// } else if (notaEmPorcentagem >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// //🚀 8-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false

// const a = 27;
// const b = 1;
// const c = 33;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // 9-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

// const a = 2;
// const b = 18;
// const c = 330;

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// //10- Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// const valorDeCusto = 600;
// const valorDeVenda = 70;

// if (valorDeCusto < 0 || valorDeVenda < 0) {
//   console.log("erro");
// } else {
//   const valorDeCustoTotal = valorDeCusto + valorDeCusto * 0.2;
//   const lucro = valorDeVenda - valorDeCustoTotal;
//   console.log(lucro * 1000);
// }

// //11- Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// const salarioBruto = 4500.0;
// let salarioBase;
// let valorLiquido;

// if (salarioBruto <= 1556.94) {
//   salarioBase = salarioBruto - salarioBruto * 0.08;
// } else if (salarioBruto <= 2594.92) {
//   salarioBase = salarioBruto - salarioBruto * 0.09;
// } else if (salarioBruto <= 5189.82) {
//   salarioBase = salarioBruto - salarioBruto * 0.11;
// } else {
//   salarioBase = salarioBruto - 570.88;
// }

// if (salarioBase <= 1903.98) {
//   valorLiquido = salarioBase;
// } else if (salarioBase <= 2826.65) {
//   valorLiquido = salarioBase - (salarioBase * 0.075 - 142.8);
// } else if (salarioBase <= 3751.05) {
//   valorLiquido = salarioBase - (salarioBase * 0.15 - 354.8);
// } else if (salarioBase <= 4664.68) {
//   valorLiquido = salarioBase - (salarioBase * 0.225 - 636.13);
// } else {
//   valorLiquido = salarioBase - (salarioBase * 0.275 - 869.36);
// }

// console.log(valorLiquido);
