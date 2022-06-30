//BUSCANDO ELEMENTOS:

// 01--Acesse o elemento elementoOndeVoceEsta.
// 02--Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// 03--Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// 04--Acesse o primeiroFilho a partir de pai.
// 05--Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// 06--Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// 07--Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// 08--Agora acesse o terceiroFilho a partir de pai.
// Extra--Mudar a cor de Atenção!.

///01
document.getElementById(elementoOndeVoceEsta);

//02
document.getElementById("elementoOndeVoceEsta").parentElement.style.color =
  "red";

//03
document.getElementById("primeiroFilhoDoFilho").textContent = "texto qualquer";

//04
document.getElementById("pai").firstElementChild;

//05
document.getElementById("elementoOndeVoceEsta").previousElementSibling
  .textContent;

//06
const variavel = document.getElementById("elementoOndeVoceEsta").nextSibling
  .nodeValue;
console.log(variavel);

//07
document.getElementById("elementoOndeVoceEsta").nextElementSibling;

//08
document.getElementById("pai").children[2];

//CRIANDO ELEMENTOS:

// 01--Crie um irmão para elementoOndeVoceEsta.
// Extra--Criar o elemento proposto no 01 logo abaixo do Node Pai.
// 02--Crie um filho para elementoOndeVoceEsta.
// 03--Crie um filho para primeiroFilhoDoFilho.
// Extra02-- Preencha a ol criada no 03 com li's.
// 04--A partir desse filho criado, acesse terceiroFilho.

//01
let criaDiv = document.createElement("div");
document.getElementById("pai").appendChild(criaDiv);

//02
let criaFilho = document.createElement("p");
document.getElementById("elementoOndeVoceEsta").appendChild(criaFilho);

//03
let criaBisneto = document.createElement("ol");
document.getElementById("primeiroFilhoDoFilho").appendChild(criaBisneto);

//04
console.log(
  document.getElementsByTagName("ol")[0].parentElement.parentElement
    .nextElementSibling
);
