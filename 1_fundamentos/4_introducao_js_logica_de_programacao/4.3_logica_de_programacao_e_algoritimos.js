//1 -Fatorial.

// const valor = 10;
// let valorFatorado = valor;

// for (let index = valor - 1; index >= 2; index -= 1) {
//   valorFatorado = valorFatorado * index;
// }
// console.log(valorFatorado);

//2 -Inverte palavra.

// let palavra = "Kakaroto";
// let palavraInvertida = "";

// for (let i = palavra.length - 1; i >= 0; i -= 1) {
//   palavraInvertida += palavra[i];
// }
// console.log(palavraInvertida);

//3 -Retora a maior e a menor.

// let array = ["java", "javascript", "python", "html", "css"];
// let maior = array[0];
// let menor = array[0];

// for (let i = 1; i < array.length; i += 1) {
//   if (maior.length < array[i].length) {
//     maior = array[i];
//   }
//   if (menor.length > array[i].length) {
//     menor = array[i];
//   }
// }
// console.log(maior, menor);

//4 -Números primos.

let maiorNumeroPrimo = 2;

for (let i = 3; i <= 22; i += 1) {
  let contadorNaoPrimo = 0;
  for (let i2 = 2; i2 < i; i2 += 1) {
    if (i % i2 === 0) {
      contadorNaoPrimo += 1;
    }
  }
  if (contadorNaoPrimo === 0) {
    maiorNumeroPrimo = i;
  }
}
console.log(maiorNumeroPrimo);
