// // Ex 1 //
// console.log("Inicio exercicio 1");
// console.log("///////////////////");
// console.log(" ");

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };

// console.log("Bem vinda ," + " " + info.personagem);
// console.log("");

// // Ex 2 //

// console.log("Inicio exercicio 2");
// console.log("///////////////////");
// console.log(" ");

// info["recorrente"] = "sim";
// console.log(info);
// console.log("");

// // Ex 3 //

// console.log("Inicio exercicio 3");
// console.log("///////////////////");
// console.log(" ");

// for (i in info) {
//   console.log(i);
// }
// console.log("");

// // EX 4 //

// console.log("Inicio exercicio 4");
// console.log("///////////////////");
// console.log(" ");

// for (i in info) {
//   console.log(info[i]);
// }
// console.log("");

// // Ex 5 //

// console.log("Inicio exercicio 5");
// console.log("///////////////////");
// console.log(" ");

// let info1 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "sim",
// };
// for (i in info1) {
//   console.log(info[i] + " " + "e" + " " + info1[i]);
// }
// console.log("");

// // Ex 6 //

// console.log("Inicio exercicio 6");
// console.log("///////////////////");
// console.log(" ");

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

// console.log(
//   "O livro favorito de" +
//     " " +
//     leitor.nome +
//     " " +
//     leitor.sobrenome +
//     " " +
//     " se chama" +
//     " " +
//     leitor.livrosFavoritos[0].titulo +
//     "!"
// );
// console.log("");

// // Ex 7 //

// console.log("Inicio exercicio 7");
// console.log("///////////////////");
// console.log(" ");

// console.log(leitor.livrosFavoritos);

// leitor.livrosFavoritos[""] = {
//   titulo: "Harry Potter e o Prisioneiro de Azkaban",
//   autor: "JK Rowling",
//   editora: "Rocco",
// };
// console.log(leitor);

// // Ex 8 //

// console.log("Inicio exercicio 8");
// console.log("///////////////////");
// console.log(" ");

// let size = Object.keys(leitor.livrosFavoritos).length;

// console.log(leitor.nome + " " + "tem " + size + " " + "livros favoritos");
