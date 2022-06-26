// // //Array será usado para os exercícios 1 ao 7:

// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // //1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log().

// // for (index = 0; index < numbers.length; index += 1) {
// //   console.log(numbers[index]);
// // }

// // //2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado.

// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let soma = 0;

// // for (index = 0; index < numbers.length; index += 1) {
// //   soma += numbers[index];
// // }
// // console.log(soma);

// // //3 -Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array.

// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let soma = 0;
// // let media = 0;

// // for (index = 0; index < numbers.length; index += 1) {
// //   soma = soma + numbers[index];
// // }
// // media = soma / numbers.length;
// // console.log(media);

// // //4 -Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20".

// // if (media > 20) {
// //   console.log("valor maior que 20");
// // } else {
// //   console.log("valor menor ou igual a 20");
// // }

// // //5 -🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let maiorNumero = numbers[0];

// // for (let index = 0; index < numbers.length; index += 1) {
// //   if (numbers[index] > maiorNumero) {
// //     maiorNumero = numbers[index];
// //   }
// // }
// // console.log(maiorNumero);

// // //6 -Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado".

// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let valoresImpares = 0;

// // for (let index = 0; index < numbers.length; index += 1) {
// //   if (numbers[index] % 2 !== 0) {
// //     valoresImpares += 1;
// //   }
// // }
// // if (valoresImpares > 0) {
// //   console.log(valoresImpares);
// // } else {
// //   console.log("nenhum valor impar encontrado");
// // }

// // //7 -Utilizando for, descubra qual o menor valor contido no array e imprima-o.

// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let menorNumero = numbers[0];

// // for (let index = 0; index <= numbers.length; index += 1) {
// //   if (menorNumero > numbers[index]) {
// //     menorNumero = numbers[index];
// //   }
// // }
// // console.log(menorNumero);

// // //8 -Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.

// // let array = [];
// // for (let index = 1; index <= 25; index += 1) {
// //   array.push(index);
// // }
// // console.log(array);

// // //9 -Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// // let arrayDividido = [];

// // for (let index = 0; index < array.length; index += 1) {
// //   arrayDividido.push(array[index] / 2);
// // }
// // console.log(arrayDividido);

// //Exercício bônus

// //let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // for (let index = 1; index < array.length; index += 1) {
// //   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
// //     if (array[index] < array[secondIndex]) {
// //       let position = array[index];
// //       array[index] = array[secondIndex];
// //       array[secondIndex] = position;
// //     }
// //   }
// // }

// //Desfio bonus apresentado na aula 4.2 - Array e Loop For.
// //Gerar um simulador de sorteios da mega-sena.

// const totalNumbers = 6;
// let myNumbers = [];
// let randomNumbers = [];
// let numerosAcertados = [];

// while (myNumbers.length < totalNumbers) {
//   myNumbers.push(Math.floor(Math.random() * 60) + 1);
// }

// while (randomNumbers.length < totalNumbers) {
//   randomNumbers.push(Math.floor(Math.random() * 60) + 1);
// }

// for (let index3 = 0; index3 < randomNumbers.length; index3 += 1) {
//   for (let index4 = 0; index4 < myNumbers.length; index4 += 1) {
//     if (myNumbers[index4] === randomNumbers[index3]) {
//       numerosAcertados.push(myNumbers[index4]);
//     }
//   }
// }

// console.log("meus numeros foram:" + " " + myNumbers);
// console.log("os numeros sorteados foram:" + " " + randomNumbers);
// console.log(numerosAcertados);

let numeroAleatorios = [];

for (let ind = 0; ind < 6; ind += 1) {
  let verificador = Math.floor(Math.random() * 60) + 1;
  if (numeroAleatorios[ind] !== verificador) numeroAleatorios.push(verificador);
}
console.log(numeroAleatorios);

let repetidos = 0;
for (let index = 0; index < numeroAleatorios.length; index += 1) {
  for (let index2 = 0; index2 < numeroAleatorios.length; index += 1) {
    if (numeroAleatorios[index] === numeroAleatorios[index2]) {
      repetidos += 1;
    }
  }
}
console.log(repetidos);
