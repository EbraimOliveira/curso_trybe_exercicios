// Básico sobre OBJETOS:

// let objetoTeste = {
//   nome: "Ebraim",
//   ultimoNome: "Oliveira",
//   idade: 35,
//   gostaDe: {
//     esporte: "climb",
//     mulher: "loira",
//     listaDeJogos: [
//       {
//         favorito: "eldritch",
//         popular: "dixit",
//         rancor: "coupe",
//       },
//       {
//         comida: "sushi",
//         bebida: "alcool",
//       },
//     ],
//   },
// };

// let numeroDeElementosNoArrayDoObjeto = Object.keys(
//   objetoTeste.gostaDe.listaDeJogos
// ).length;

// console.log(numeroDeElementosNoArrayDoObjeto);

// console.log(objetoTeste.nome, objetoTeste["idade"], objetoTeste.gostaDeClimb);

// objetoTeste["nomeCompleto"] =
//   objetoTeste.nome + " " + objetoTeste["ultimoNome"];

// console.log(objetoTeste["nomeCompleto"]);

// console.log(objetoTeste["gostaDe"]["3"]);

// ------------------------------------------------------------------------------------------------

// Para fixar:

// let name = "Marta";
// let lastName = "Silva";
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,
//   },
//   bestInTheWorld: {
//     years: [2006, 2007, 2008, 2009, 2010, 2018],
//   },
// };

// console.log(
//   "A jogadora" +
//     " " +
//     player["name"] +
//     " " +
//     player.lastName +
//     " " +
//     "tem" +
//     " " +
//     player["age"] +
//     " " +
//     "de idade foi a melhor nos anos+
//     " " +
//     player.bestInTheWorld["years"] +
//     " " +
//     "e ganhou" +
//     " " +
//     player["medals"].golden +
//     " " +
//     "medalhas de ouro"
// );

// -----------------------------------------------------------------------------------------------
//Funcionameto básico do FOR IN:

// let objeto = {
//   nome: "athanos",
//   age: 51,
//   33: true,
//   bode: "cabra",
// };

// for (let chave in objeto) {
//   console.log(objeto[chave]);
// }

//----------------------------------------------------------------------------------------------
// Uso do FOR IN para exibir os elementos de um array:

// let cars = ["Saab", "Volvo", "BMW"];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// for (let index = 0; index < cars.length; index += 1) {
//   console.log(cars[index]);
// }

//----------------------------------------------------------------------------------------

// Use o código abaixo para fazer os exercícios até o 5.

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };

//1 -Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

// console.log("Bem vinda" + " " + info.personagem);

//2 -🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

// info["recorrente"] = "Sim";
// console.log(info);

//3 -Faça um for/in que mostre todas as chaves do objeto.

// for (let chaves in info) {
//   console.log(chaves);
// }

//4 -Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

// for (let valores in info) {
//   console.log(info[valores]);
// }

//5 -Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

// let object = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell s Four Color Comics #178",
//   nota: "O Ultimo MacPatinhas",
//   recorrente: "Sim",
// };

// for (valores in info) {
// }
// for (i in object) {
//   console.log(info[i] + " " + "e" + " " + object[i]);
// }

//--------------------------------------------------------------------------------------------

//Use o código abaixo para resolver os exercícios até o 8.

// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//   ],
// };

//🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// console.log(
//   "O livro favorito de" +
//     " " +
//     leitor.nome +
//     " " +
//     leitor["sobrenome"] +
//     " " +
//     "se chama" +
//     " " +
//     leitor.livrosFavoritos[0].titulo
// );

//🚀 7 -Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }

// leitor.livrosFavoritos.push({
//   titulo: "Harry Potter e o Prisioneiro de Azkaban",
//   autor: "JK Rowling",
//   editora: "Rocco",
// });

// console.log(leitor.livrosFavoritos[1].autor);

//🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// ERRADO:
// console.log(
//   leitor.nome +
//     " " +
//     "tem 2 livros favoritos," +
//     " " +
//     leitor.livrosFavoritos[0].titulo +
//     " " +
//     "e" +
//     " " +
//     leitor.livrosFavoritos[1].titulo
// );

//CORRETO:
// let size = Object.keys(leitor.livrosFavoritos).length;

// // console.log(leitor.nome + " " + "tem " + size + " " + "livros favoritos");
// console.log(size);
