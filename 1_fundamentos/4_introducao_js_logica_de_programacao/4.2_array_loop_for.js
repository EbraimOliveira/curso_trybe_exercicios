// //Array será usado para os exercícios 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// //1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log().

// for (index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// //2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }
// console.log(soma);

// //3 -Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media = 0;

// for (index = 0; index < numbers.length; index += 1) {
//   soma = soma + numbers[index];
// }
// media = soma / numbers.length;
// console.log(media);

// //4 -Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20".

// if (media > 20) {
//   console.log("valor maior que 20");
// } else {
//   console.log("valor menor ou igual a 20");
// }

// //5 -🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > maiorNumero) {
//     maiorNumero = numbers[index];
//   }
// }
// console.log(maiorNumero);

// //6 -Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado".

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let valoresImpares = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     valoresImpares += 1;
//   }
// }
// if (valoresImpares > 0) {
//   console.log(valoresImpares);
// } else {
//   console.log("nenhum valor impar encontrado");
// }

// //7 -Utilizando for, descubra qual o menor valor contido no array e imprima-o.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorNumero = numbers[0];

// for (let index = 0; index <= numbers.length; index += 1) {
//   if (menorNumero > numbers[index]) {
//     menorNumero = numbers[index];
//   }
// }
// console.log(menorNumero);

// //8 -Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.

// let array = [];
// for (let index = 1; index <= 25; index += 1) {
//   array.push(index);
// }
// console.log(array);

// //9 -Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// let arrayDividido = [];

// for (let index = 0; index < array.length; index += 1) {
//   arrayDividido.push(array[index] / 2);
// }
// console.log(arrayDividido);

//Exercício bônus

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

//Desfio bonus apresentado na aula 4.2 - Array e Loop For.
//Gerar um simulador de sorteios da mega-sena.

let myNumbers = [3, 11, 17, 20, 43, 48];
let randomNumbers = [];
let acertos = 0;
  randomNumbers.push(Math.floor(Math.random() * 60) + 1);
  while (randomNumbers.length < 6) {
    let numberDrown = Math.floor(Math.random() * 60) + 1;
    let counter = 0;
   for (let i = 0; i < randomNumbers.length; i += 1) {
      if (numberDrown === randomNumbers[i]) { 
        counter += 1;
      }
    } 
    if (counter ===0 ) {
      randomNumbers.push(numberDrown)
    }
  }

for (let index = 0; index < myNumbers.length; index +=1) {
  for (let index2 =0; index2 < randomNumbers.length; index2 +=1) {
    if (myNumbers[index] === randomNumbers[index2]) {
      acertos += 1;
    }
  }
}
console.log(myNumbers);
console.log(randomNumbers);
console.log(acertos);





